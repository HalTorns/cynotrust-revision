import http from 'node:http';
import { createHmac, randomBytes, timingSafeEqual, createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const password = process.env.SITE_PASSWORD;
if (!password) throw new Error('SITE_PASSWORD must be configured');
const passwordHash = createHash('sha256').update(password).digest();
const secret = randomBytes(32);
const root = resolve('dist');
const sign = value => createHmac('sha256', secret).update(value).digest('hex');
const equal = (a, b) => a.length === b.length && timingSafeEqual(a, b);
const attempts = new Map();
const types = { '.html':'text/html; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png' };

function authenticated(req) {
  const cookie = (req.headers.cookie || '').split(';').map(s=>s.trim()).find(s=>s.startsWith('cyno_session='));
  if (!cookie) return false;
  const [expires, signature] = cookie.slice(13).split('.');
  return /^\d+$/.test(expires || '') && Number(expires)>Date.now() && /^[a-f0-9]{64}$/.test(signature || '') && equal(Buffer.from(signature), Buffer.from(sign(expires)));
}
function page(error='') {
  return `<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Connexion · CynoTrust Formation</title><style>html{color-scheme:dark}body{margin:0;min-height:100dvh;display:grid;place-items:center;background:#141516;color:#f0ece7;font:16px 'Segoe UI',sans-serif}main{box-sizing:border-box;width:min(420px,calc(100% - 32px));padding:32px;background:#202224;border:1px solid #383a3c;border-radius:12px}h1{font:30px Georgia;margin:8px 0 16px}p{color:#b7afa8;line-height:1.6}label{display:block;margin:24px 0 8px}input,button{box-sizing:border-box;width:100%;padding:14px;border-radius:6px;font:inherit}input{background:#141516;color:white;border:1px solid #64605a}button{margin-top:18px;border:0;background:#eeaa72;color:#25190f;font-weight:700;cursor:pointer}.error{color:#ffbda0}small{color:#eeaa72}</style><main><small>CYNOTRUST FORMATION</small><h1>Aide révision</h1><p>Entre le mot de passe pour accéder aux planches et aux exercices.</p>${error?`<p class="error" role="alert">${error}</p>`:''}<form method="post" action="/login"><label for="password">Mot de passe</label><input id="password" name="password" type="password" autocomplete="current-password" required autofocus><button>Accéder aux révisions</button></form></main></html>`;
}
function send(res,status,body,type='text/html; charset=utf-8') { res.writeHead(status,{'Content-Type':type});res.end(body); }
function redirect(res,path) {res.writeHead(303,{Location:path});res.end();}

http.createServer(async(req,res)=>{
  res.setHeader('Cache-Control','no-store');
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('Referrer-Policy','same-origin');
  try {
    const url=new URL(req.url,'http://localhost');
    if(url.pathname==='/healthz' && req.method==='GET') return send(res,200,'ok\n','text/plain');
    if(url.pathname==='/login' && req.method==='POST') {
      const key=req.socket.remoteAddress || 'local', now=Date.now();
      for(const [ip,entry] of attempts) if(entry.until<=now) attempts.delete(ip);
      const attempt=attempts.get(key);
      if(attempt?.count>=10){res.setHeader('Retry-After','60');return send(res,429,page('Trop de tentatives. Réessaie dans une minute.'));}
      let body='';
      for await (const chunk of req){body+=chunk;if(Buffer.byteLength(body)>4096)return send(res,413,'Requête trop longue.','text/plain');}
      const supplied=new URLSearchParams(body).get('password') || '';
      if(!equal(createHash('sha256').update(supplied).digest(),passwordHash)){
        if(attempts.size>1000)attempts.clear();
        attempts.set(key,{count:(attempt?.count||0)+1,until:attempt?.until||now+60000});
        return send(res,401,page('Mot de passe incorrect.'));
      }
      attempts.delete(key);
      const expires=String(Date.now()+12*60*60*1000);
      const secure=req.headers['x-forwarded-proto']==='https'||req.socket.encrypted;
      res.setHeader('Set-Cookie',`cyno_session=${expires}.${sign(expires)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=43200${secure?'; Secure':''}`);
      return redirect(res,'/');
    }
    if(!['GET','HEAD'].includes(req.method))return send(res,405,'Méthode non autorisée.','text/plain');
    if(url.pathname==='/login')return authenticated(req)?redirect(res,'/'):send(res,200,page());
    if(!authenticated(req))return redirect(res,'/login');
    const path=decodeURIComponent(url.pathname);
    const file=resolve(root,'.'+(path==='/'?'/index.html':path));
    if(!file.startsWith(root+sep)||path.split('/').some(part=>part.startsWith('.'))||!types[extname(file)])return send(res,404,'Introuvable.','text/plain');
    const content=await readFile(file);
    return send(res,200,req.method==='HEAD'?'':content,types[extname(file)]);
  }catch(error){return send(res,error.code==='ENOENT'?404:400,'Ressource indisponible.','text/plain');}
}).listen(Number(process.env.PORT||8080),'0.0.0.0');
