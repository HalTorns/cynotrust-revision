import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://127.0.0.1:8080';
const request=(path,options={})=>fetch(base+path,{redirect:'manual',...options});
assert.equal((await request('/healthz')).status,200);
for(const path of ['/','/app.js','/data.js','/assets/20_0.png']){
 const result=await request(path);assert.equal(result.status,303);assert.equal(result.headers.get('location'),'/login');
}
assert((await (await request('/login')).text()).includes('type="password"'));
let response=await request('/login',{method:'POST',body:new URLSearchParams({password:'incorrect-password'})});
assert.equal(response.status,401);assert.equal(response.headers.get('set-cookie'),null);
response=await request('/login',{method:'POST',headers:{'X-Forwarded-Proto':'https'},body:new URLSearchParams({password:process.env.SITE_PASSWORD})});
assert.equal(response.status,303);
const cookie=response.headers.get('set-cookie');assert(cookie.includes('HttpOnly'));assert(cookie.includes('SameSite=Lax'));assert(cookie.includes('Secure'));assert(!cookie.includes(process.env.SITE_PASSWORD));
const headers={Cookie:cookie.split(';')[0]};
for(const path of ['/','/app.js','/data.js','/style.css','/assets/20_0.png','/assets/23_0.png','/assets/27_0.png','/assets/41_1.png','/assets/44_0.png','/assets/49_0.png'])assert.equal((await request(path,{headers})).status,200,path);
assert.equal((await request('/data.js',{headers:{Cookie:headers.Cookie+'tampered'}})).status,303);
assert.equal((await request('/server.mjs',{headers})).status,404);
assert.equal((await request('/.env',{headers})).status,404);
assert.equal((await request('/missing.png',{headers})).status,404);
for(let i=0;i<10;i++)assert.equal((await request('/login',{method:'POST',body:new URLSearchParams({password:'wrong'})})).status,401);
assert.equal((await request('/login',{method:'POST',body:new URLSearchParams({password:'wrong'})})).status,429);
console.log('PASS: password gate, protected assets, rejected password and forged cookie, session, all diagrams, rate limit.');
