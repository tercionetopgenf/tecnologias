/* Interações de leitura e acessibilidade. O conteúdo permanece no HTML. */
(() => {
  'use strict';
  const labels={pt:{focus:'Ler em foco',close:'Fechar leitura',prev:'Anterior',next:'Próximo',menu:'Conteúdo',label:'Leitura em foco'},en:{focus:'Focus reading',close:'Close reading',prev:'Previous',next:'Next',menu:'Contents',label:'Focus reading'}};
  const tr=key=>labels[document.documentElement.lang==='en'?'en':'pt'][key];
  const dialog=document.createElement('dialog');
  dialog.className='focus-dialog';dialog.setAttribute('aria-labelledby','focus-heading');
  dialog.innerHTML='<div class="focus-toolbar"><span class="focus-label"></span><button type="button" class="focus-close">×</button></div><div class="focus-content"></div><div class="focus-nav"><button type="button" class="focus-prev"></button><span class="focus-count" aria-live="polite"></span><button type="button" class="focus-next"></button></div>';
  document.body.appendChild(dialog);
  const close=dialog.querySelector('.focus-close'),prev=dialog.querySelector('.focus-prev'),next=dialog.querySelector('.focus-next'),content=dialog.querySelector('.focus-content');
  let activeCard=null,group=[],index=0,opener=null;
  const cards=[...document.querySelectorAll('.card,.expanded-card,.phase-card,.type-card,.path-step')];
  function renderFocus(){
    if(!activeCard)return;
    const clone=activeCard.cloneNode(true);
    clone.querySelectorAll('.card-action').forEach(e=>e.remove());
    clone.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));
    clone.querySelectorAll('[data-i18n]').forEach(e=>{e.removeAttribute('data-i18n');e.removeAttribute('data-pt')});
    content.innerHTML=clone.innerHTML;
    const heading=content.querySelector('h3');if(heading)heading.id='focus-heading';
    dialog.querySelector('.focus-count').textContent=`${index+1} / ${group.length}`;
    prev.disabled=index===0;next.disabled=index===group.length-1;
    dialog.scrollTop=0;
  }
  function openCard(card,button){
    activeCard=card;opener=button;group=cards.filter(c=>c.parentElement===card.parentElement);index=group.indexOf(card);renderFocus();
    if(typeof dialog.showModal==='function'){dialog.showModal();document.body.style.overflow='hidden';close.focus();}
  }
  // Browsers without dialog support retain the complete inline reading experience.
  if(typeof dialog.showModal==='function')cards.forEach(card=>{
    const button=document.createElement('button');button.type='button';button.className='card-action';button.textContent=tr('focus');
    card.appendChild(button);card.classList.add('interactive-card');
    card.addEventListener('click',event=>{if(event.target.closest('a')||event.target.closest('button')&&event.target.closest('button')!==button)return;if(window.getSelection()?.toString())return;openCard(card,button)});
  });
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus()});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
  const move=step=>{const proposed=index+step;if(proposed<0||proposed>=group.length)return;index=proposed;activeCard=group[index];renderFocus()};
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();move(-1)}if(event.key==='ArrowRight'){event.preventDefault();move(1)}});

  const nav=document.getElementById('nav-links'),menu=document.querySelector('.menu-btn');
  const topics=[['fundamentos','Perspectivas teóricas','Theoretical perspectives'],['timeline','Linha do tempo','Timeline'],['filosofia','Filosofia e humanização','Philosophy and humane care'],['pesquisa','Pesquisa clínica','Clinical research'],['politicas','Políticas de CT&I','Science policies'],['reflexao','Questões de reflexão','Reflection questions'],['atividade','Sobre a atividade','About the activity']];
  for(const [id,pt,en] of topics){if(nav.querySelector(`a[href="#${id}"]`))continue;const a=document.createElement('a');a.href='#'+id;a.dataset.navPt=pt;a.dataset.navEn=en;a.textContent=pt;nav.appendChild(a)}
  // Keep menu links in the same sequence as the page.
  const pageSections=[...document.querySelectorAll('main section[id]')];
  [...nav.querySelectorAll('a')].sort((a,b)=>pageSections.findIndex(s=>s.id===a.hash.slice(1))-pageSections.findIndex(s=>s.id===b.hash.slice(1))).forEach(a=>nav.appendChild(a));
  const closeMenu=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')};
  document.addEventListener('click',event=>{if(!event.target.closest('.nav'))closeMenu()});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
  const tabs=[...document.querySelectorAll('.tab-btn')];
  const syncTabs=()=>tabs.forEach((tab,i)=>{tab.id='praxis-tab-'+i;tab.tabIndex=tab.classList.contains('active')?0:-1;const panel=document.getElementById(tab.getAttribute('aria-controls'));panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);panel.tabIndex=0});
  tabs.forEach((tab,i)=>{tab.addEventListener('click',syncTabs);tab.addEventListener('keydown',event=>{let target;if(['ArrowRight','ArrowDown'].includes(event.key))target=(i+1)%tabs.length;else if(['ArrowLeft','ArrowUp'].includes(event.key))target=(i-1+tabs.length)%tabs.length;else if(event.key==='Home')target=0;else if(event.key==='End')target=tabs.length-1;if(target!==undefined){event.preventDefault();tabs[target].click();tabs[target].focus()}})});syncTabs();
  function translateInterface(){
    const en=document.documentElement.lang==='en';menu.textContent=tr('menu');
    document.querySelectorAll('.card-action').forEach(button=>{button.textContent=tr('focus');button.setAttribute('aria-label',tr('focus')+': '+button.parentElement.querySelector('h3').textContent)});
    close.setAttribute('aria-label',tr('close'));prev.textContent=tr('prev');next.textContent=tr('next');dialog.querySelector('.focus-label').textContent=tr('label');
    nav.querySelectorAll('[data-nav-pt]').forEach(a=>a.textContent=en?a.dataset.navEn:a.dataset.navPt);
    if(dialog.open)renderFocus();
  }
  new MutationObserver(translateInterface).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});translateInterface();
  // Contents are visible by default; only elements below the viewport receive an entrance.
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const entrances=[...document.querySelectorAll('main h2,.card,.expanded-card,.phase-card,.historical-track li,.section-art')];
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}}),{threshold:.06,rootMargin:'0px 0px 35px 0px'});
    document.documentElement.classList.add('motion-ready');
    entrances.forEach((element,i)=>{if(element.getBoundingClientRect().top>window.innerHeight){element.classList.add('entrance-pending');element.style.setProperty('--entrance-delay',`${i%3*55}ms`);io.observe(element)}});
    // Fail open if the page is printed or an unusually long-lived hidden tab delays observation.
    window.addEventListener('beforeprint',()=>entrances.forEach(e=>e.classList.add('in-view')));
  }
})();
