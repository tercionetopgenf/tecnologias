(() => {
  'use strict';
  const masters=['MESTRADO EM ENFERMAGEM/PPGENF','MASTER’S IN NURSING/PPGENF'];
  const doctorate=['DOUTORADO EM ENFERMAGEM NA ATENÇÃO À SAÚDE/PPGENF','DOCTORATE IN NURSING IN HEALTH CARE/PPGENF'];
  const faculty=['PROFESSOR(A) DA DISCIPLINA','COURSE INSTRUCTOR'];
  const people=[
    ['ANA BEATRIZ DA SILVA','ana-beatriz.jpeg',doctorate],
    ['AWHOBIWOM VICTORIA UNDIE','victoria.jpg',masters],
    ['CLARA CECI DIÓGENES RÊGO','clara.jpeg',masters],
    ['EDUARDO PINHEIRO E SILVA','eduardo.jpg',masters],
    ['FLAVIA GOMES SILVA','flavia.jpeg',doctorate],
    ['JONATAS GOMES NERI','jonatas.jpg',masters],
    ['TERCIO SANTINO DE OLIVEIRA NETO','tercio.png',masters],
    ['DRA. ISABELLE CAMPOS DE AZEVEDO','isabelle.jpeg',faculty,'meta1'],
    ['DR. MÉRCIO GABRIEL DE ARAÚJO','mercio.jpg',faculty,'meta2']
  ];
  const panel=document.createElement('aside');
  panel.id='person-preview';panel.className='person-preview';panel.hidden=true;
  panel.setAttribute('aria-labelledby','person-preview-name');
  panel.innerHTML='<button type="button" class="person-close"></button><img width="250" height="235" alt=""><h3 id="person-preview-name"></h3><p></p>';
  document.body.appendChild(panel);
  const close=panel.querySelector('button'),photo=panel.querySelector('img'),heading=panel.querySelector('h3'),course=panel.querySelector('p');
  let active=null,pinned=false,timer;
  const english=()=>document.documentElement.lang==='en';
  const buttons=new Map();
  function position(){
    if(!active)return;
    const r=active.getBoundingClientRect(),w=panel.offsetWidth,h=panel.offsetHeight;
    const left=Math.max(12,Math.min(r.left,window.innerWidth-w-12));
    const below=r.bottom+8;
    const top=below+h<=window.innerHeight-12?below:Math.max(12,r.top-h-8);
    panel.style.left=left+'px';panel.style.top=top+'px';
  }
  function refresh(){
    close.textContent=english()?'Close':'Fechar';
    buttons.forEach((person,button)=>button.setAttribute('aria-label',(english()?'View photo and profile: ':'Ver foto e perfil: ')+person[0]));
    if(!active)return;
    const person=buttons.get(active);
    heading.textContent=person[0];course.textContent=person[2][english()?1:0];
    photo.alt=(english()?'Photo of ':'Foto de ')+person[0];position();
  }
  function hide(returnFocus=false){
    clearTimeout(timer);
    const previous=active;
    if(previous)previous.setAttribute('aria-expanded','false');
    active=null;pinned=false;panel.hidden=true;
    if(returnFocus)previous?.focus();
  }
  function show(button,pin=false){
    clearTimeout(timer);
    if(active&&active!==button)active.setAttribute('aria-expanded','false');
    active=button;pinned=pin;
    photo.src='assets/images/participants/'+buttons.get(button)[1];
    panel.hidden=false;button.setAttribute('aria-expanded','true');refresh();
  }
  function deferHide(){clearTimeout(timer);if(!pinned)timer=setTimeout(()=>hide(),220)}
  people.forEach(person=>{
    const node=person[3]?document.querySelector('.hero .meta [data-i18n="'+person[3]+'"]'):[...document.querySelectorAll('.author-list li')].find(li=>li.textContent.trim()===person[0]);
    if(!node)return;
    const button=document.createElement('button');button.type='button';button.className='person-trigger';
    button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls',panel.id);
    if(person[3]){node.before(button);button.appendChild(node)}else{button.textContent=node.textContent;node.replaceChildren(button)}
    buttons.set(button,person);
    button.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'&&!pinned)show(button)});
    button.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse')deferHide()});
    button.addEventListener('click',()=>{if(active===button&&pinned)hide();else show(button,true)});
    button.addEventListener('keydown',event=>{if(event.key==='ArrowDown'){event.preventDefault();show(button,true);close.focus()}});
  });
  panel.addEventListener('pointerenter',()=>clearTimeout(timer));
  panel.addEventListener('pointerleave',deferHide);
  close.addEventListener('click',()=>hide(true));
  document.addEventListener('pointerdown',event=>{if(active&&!panel.contains(event.target)&&!active.contains(event.target))hide()});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&active){event.preventDefault();hide(panel.contains(document.activeElement))}});
  document.addEventListener('focusin',event=>{if(active&&!panel.contains(event.target)&&event.target!==active)hide()});
  window.addEventListener('resize',position);
  window.addEventListener('scroll',()=>{if(active)hide()},{passive:true});
  photo.addEventListener('load',position);
  new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  refresh();
})();
