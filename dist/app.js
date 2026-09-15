'use strict';
const $=id=>document.getElementById(id);
const state={index:0,mode:'revision',kind:'name',selected:null,detail:null,answers:{},checked:false,order:[],active:[],zoom:1,panX:0,panY:0,focused:null};
const current=()=>SCHEMAS[state.index];
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function start(index=state.index,mode=state.mode,active){state.index=index;state.mode=mode;state.focused=null;state.selected=null;state.detail=null;state.answers={};state.checked=false;state.active=active||current().points.map((_,i)=>i);state.order=shuffle(state.active);state.zoom=1;$('feedback').textContent='';render();}
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e}
function render(){const s=current();$('title').textContent=s.title;$('source').textContent=`MODULE 02 · PAGE ${s.page} · ${s.points.length} REPÈRES`;$('library').replaceChildren(...SCHEMAS.map((d,i)=>{const b=el('button',undefined,'nav-item'+(i===state.index?' active':''));b.append(el('small',String(i+1).padStart(2,'0')),el('span',d.title));b.onclick=()=>start(i);b.setAttribute('aria-current',i===state.index?'page':'false');return b}));$('session-toggle').textContent=state.mode==='quiz'?'Arrêter de réviser':'Commencer une révision';$('session-toggle').classList.toggle('running',state.mode==='quiz');$('kind-wrap').hidden=state.mode!=='quiz';$('instruction').textContent=state.mode==='revision'?'Touche une légende pour découvrir son repère.':'Choisis une étiquette, puis touche le numéro où la placer.';applyImage(s);$('picture').src=s.image;$('picture').alt=`${s.title} — schéma du cours, page ${s.page}`;renderZones();renderPanel();zoom(state.zoom);}
function applyImage(s){
 const picture=$('picture'),diagram=$('diagram');
 diagram.style.overflow=s.crop?'hidden':'';
 diagram.style.aspectRatio=s.crop?`${s.crop.width} / ${s.crop.height*(1-s.crop.top/100)}`:'';
 picture.style.position=s.crop?'absolute':'';
 picture.style.top=s.crop?`${-s.crop.top/(1-s.crop.top/100)}%`:'';
}
function renderZones(){const s=current();$('zones').replaceChildren();s.points.forEach((p,i)=>{const b=el('button',undefined,'zone');const [x,y,w,h]=p.box;Object.assign(b.style,{left:x+'%',top:y+'%',width:w+'%',height:h+'%'});b.classList.toggle('focused',state.focused===i);if(state.mode==='quiz'){b.classList.add('quiz');b.textContent=i+1;if(state.answers[i]!==undefined){b.classList.add('filled');b.textContent=(i+1)+' •'}if(state.checked){b.classList.add(state.answers[i]===i?'correct':'wrong');b.textContent=(i+1)+(state.answers[i]===i?' ✓':' ×')}b.setAttribute('aria-label',`Emplacement ${i+1}${state.answers[i]!==undefined?', réponse placée':''}`);if(!state.active.includes(i)){b.disabled=true;b.textContent='—'}b.ondragover=e=>e.preventDefault();b.ondrop=e=>{e.preventDefault();const id=Number(e.dataTransfer.getData('text/plain'));if(state.active.includes(id))place(i,id)};b.onclick=()=>place(i);}else{b.setAttribute('aria-label',p.name);b.title=p.name;if(!state.active.includes(i)){b.disabled=true;b.classList.add('out-of-scope')}b.classList.toggle('selected',state.detail===i);b.onclick=()=>{state.detail=i;state.focused=i;renderZones();renderPanel();renderSpotlight()}}$('zones').append(b)});}
function place(target,id=state.selected){if(state.checked||state.mode!=='quiz'||!state.active.includes(target))return;if(id===null){if(state.answers[target]!==undefined){state.selected=state.answers[target];delete state.answers[target];renderZones();renderPanel()}else{$('feedback').textContent='Choisis d’abord une étiquette dans la liste.'}return}if(!state.active.includes(id))return;for(const key of Object.keys(state.answers))if(state.answers[key]===id)delete state.answers[key];state.answers[target]=id;state.selected=null;$('feedback').textContent=`Réponse placée sur le repère ${target+1}. Tu peux encore la modifier.`;renderZones();renderPanel();}
function renderPanel(){const s=current(),d=$('details'),bank=$('bank'),a=$('actions');d.replaceChildren();bank.replaceChildren();a.replaceChildren();if(state.mode==='revision'){const p=s.points[state.detail];if(p){d.append(el('div',String(state.detail+1).padStart(2,'0'),'big-number'),el('h3',p.name),el('p',p.description));}else{d.append(el('div','↗','big-number'),el('h3','Prends le temps d’observer.'),el('p','Les légendes restent visibles. Touche celle que tu souhaites réviser pour lire sa description.'))}d.append(el('p',s.note||'Suis le trait de légende pour retrouver la structure représentée.','hint'));return}
const count=Object.keys(state.answers).length;d.append(el('p',state.checked?'TA CORRECTION':`${count} / ${state.active.length} ÉTIQUETTES PLACÉES`,'eyebrow'));const prog=el('div',undefined,'progress'),fill=el('i');fill.style.width=(100*count/state.active.length)+'%';prog.append(fill);d.append(prog);
if(state.checked){const wrong=state.active.filter(i=>state.answers[i]!==i),correct=state.active.length-wrong.length;d.append(el('h3',`${correct} / ${state.active.length} bonnes réponses`),el('p',wrong.length?'Reprends les repères qui te résistent.':'Tous les repères sont à leur place !'));for(const i of state.active){const r=el('div',undefined,'review-row'+(wrong.includes(i)?' bad':''));r.append(el('b',`${i+1}. ${s.points[i].name}`));if(wrong.includes(i))r.append(el('span',`Ta réponse : ${state.answers[i]===undefined?'non placée':s.points[state.answers[i]].name}`));else r.append(el('span','Bien placé'));const b=el('button','Voir ce repère','secondary');b.onclick=()=>focusPoint(s.points[i]);r.append(b);bank.append(r)}if(wrong.length){const b=el('button','Rejouer les erreurs','primary');b.onclick=()=>start(state.index,'quiz',wrong);a.append(b)}const all=el('button','Nouvelle interrogation','secondary');all.onclick=()=>start(state.index,'quiz');a.append(all);return}
d.append(el('h3',state.selected===null?'À toi de placer.':'Choisis un emplacement.'),el('p','Touche une étiquette puis un numéro sur l’image. Tu peux aussi glisser-déposer. Une étiquette déjà placée reste modifiable.'));const list=el('div',undefined,'bank-list');state.order.forEach(i=>{const p=s.points[i],target=Object.keys(state.answers).find(k=>state.answers[k]===i);const b=el('button',state.kind==='name'?p.name:p.description,'card'+(state.selected===i?' selected':'')+(target!==undefined?' assigned':''));b.draggable=true;b.setAttribute('aria-pressed',state.selected===i);b.ondragstart=e=>{state.selected=i;e.dataTransfer.setData('text/plain',String(i))};b.onclick=()=>{state.selected=state.selected===i?null:i;renderPanel()};if(target!==undefined)b.append(el('small',`Placé sur ${Number(target)+1} · toucher pour déplacer`));list.append(b)});bank.append(list);const validate=el('button',count===state.active.length?'Corriger mes réponses':`Corriger (${count}/${state.active.length} placées)`,'primary');validate.disabled=count===0;validate.onclick=()=>{state.checked=true;state.selected=null;renderZones();renderPanel();$('feedback').textContent='Correction affichée. Les repères verts sont justes ; les repères orange sont à revoir.'};a.append(validate);}
function positionImage(){
 const v=$('viewport'),d=$('diagram');
 state.panX=Math.max(v.clientWidth*(1-state.zoom),Math.min(0,state.panX));
 state.panY=Math.max(v.clientHeight*(1-state.zoom),Math.min(0,state.panY));
 d.style.transform=`translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
 v.style.cursor=state.zoom>1?'grab':'';
 v.style.touchAction=state.zoom>1?'none':'pan-y';
}
function zoom(value,anchor){
 const v=$('viewport'),old=state.zoom,next=Math.max(1,Math.min(4,value));
 const x=anchor?.x??v.clientWidth/2,y=anchor?.y??v.clientHeight/2;
 state.panX=x-(x-state.panX)*next/old;state.panY=y-(y-state.panY)*next/old;
 state.zoom=next;
 if(next===1){state.panX=0;state.panY=0;}
 $('diagram').style.width='100%';positionImage();
}
function focusPoint(p){
 state.focused=current().points.indexOf(p);if(state.mode==='revision')state.detail=state.focused;
 renderZones();renderPanel();zoom(2.5);
 requestAnimationFrame(()=>{const v=$('viewport'),d=$('diagram'),[x,y,w,h]=p.box,target=p.focus||[x+w/2,y+h/2];
 state.panX=v.clientWidth/2-d.clientWidth*state.zoom*target[0]/100;
 state.panY=v.clientHeight/2-d.clientHeight*state.zoom*target[1]/100;positionImage();});
}
$('kind').onchange=e=>{state.kind=e.target.value;start(state.index,'quiz')};





const sessionDialog=$('session-dialog');
$('session-toggle').onclick=()=>{
 if(state.mode==='quiz'){start(state.index,'revision');return;}
 $('session-choices').replaceChildren(...SCHEMAS.map((schema,index)=>{
  const button=el('button',`${String(index+1).padStart(2,'0')} · ${schema.title}`,'session-choice');
  button.onclick=()=>{sessionDialog.close();start(index,'quiz');};return button;
 }));
 sessionDialog.showModal();
};
$('session-cancel').onclick=()=>sessionDialog.close();
const viewer=$('viewport');
$('picture').draggable=false;
$('picture').onload=()=>positionImage();
viewer.addEventListener('wheel',event=>{
 if(event.ctrlKey||event.metaKey)return;
 if(state.zoom===1&&event.deltaY>=0)return;
 event.preventDefault();
 const rect=viewer.getBoundingClientRect(),delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?viewer.clientHeight:1);
 zoom(state.zoom*Math.exp(-Math.max(-200,Math.min(200,delta))*.002),{x:event.clientX-rect.left,y:event.clientY-rect.top});
},{passive:false});
let drag=null;
viewer.addEventListener('pointerdown',event=>{
 if(state.zoom===1||event.button!==0||event.target.closest('button'))return;
 drag={id:event.pointerId,x:event.clientX,y:event.clientY,panX:state.panX,panY:state.panY};
 viewer.setPointerCapture(event.pointerId);event.preventDefault();
});
viewer.addEventListener('pointermove',event=>{
 if(!drag||drag.id!==event.pointerId)return;
 state.panX=drag.panX+event.clientX-drag.x;state.panY=drag.panY+event.clientY-drag.y;
 positionImage();viewer.style.cursor='grabbing';
});
function endDrag(){drag=null;viewer.style.cursor=state.zoom>1?'grab':'';}
viewer.addEventListener('pointerup',endDrag);viewer.addEventListener('pointercancel',endDrag);viewer.addEventListener('lostpointercapture',endDrag);
if(typeof ResizeObserver!=='undefined')new ResizeObserver(()=>positionImage()).observe(viewer);
start();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'start_diagram_revision',description:'Ouvrir une planche de l’atlas en mode révision ou interrogation. Réinitialise l’exercice en cours.',inputSchema:{type:'object',properties:{diagram:{type:'integer',minimum:1,maximum:SCHEMAS.length},mode:{type:'string',enum:['revision','quiz']}},required:['diagram','mode'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||!Number.isInteger(input.diagram)||input.diagram<1||input.diagram>SCHEMAS.length||!['revision','quiz'].includes(input.mode))throw new Error('Planche ou mode invalide');start(input.diagram-1,input.mode);return {title:current().title,mode:state.mode,points:current().points.length}}})).catch(()=>{})}catch{}}
