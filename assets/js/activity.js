(() => {
  'use strict';
  const text={pt:{summary:'Este website é o produto desenvolvido para a Atividade Avaliativa I da disciplina Tecnologias em Saúde e Enfermagem, do PGEnf/UFRN. Reúne uma síntese dos conteúdos discutidos nas três primeiras aulas, articulando conceitos, reflexões e aplicações das tecnologias no cuidado, no ensino e na pesquisa em enfermagem.',title:'Sobre esta atividade',close:'Fechar',assignment:'A Atividade Avaliativa I propôs aos grupos dos seminários a elaboração de uma síntese dos conteúdos discutidos nas três primeiras aulas, utilizando uma tecnologia diferente para apresentar o conhecimento produzido.',choice:'Nosso grupo escolheu desenvolver um website como tecnologia educacional. O formato permite organizar as leituras em um percurso interativo, relacionar perspectivas teóricas e oferecer diferentes formas de exploração do conteúdo, por meio de cards, linha do tempo, referências e assistente temático.',product:'O site constitui, portanto, tanto a apresentação da síntese acadêmica quanto o produto tecnológico escolhido pelo grupo para a atividade.'},en:{summary:'This website is the product developed for Assessment Activity I of the Health and Nursing Technologies course at PGEnf/UFRN. It synthesizes the content discussed in the first three classes, connecting concepts, reflections and applications of technologies in nursing care, education and research.',title:'About this activity',close:'Close',assignment:'Assessment Activity I asked the seminar groups to synthesize the content discussed in the first three classes, with each group using a different technology to present the knowledge produced.',choice:'Our group chose to develop a website as an educational technology. This format organizes the readings into an interactive learning path, connects theoretical perspectives and offers different ways to explore the content through cards, a timeline, references and a thematic assistant.',product:'The website therefore serves both as a presentation of the academic synthesis and as the technological product chosen by the group for the activity.'}};
  const section=document.getElementById('atividade');
  const dialog=document.createElement('dialog');
  dialog.className='activity-dialog';dialog.setAttribute('aria-labelledby','activity-dialog-title');
  dialog.innerHTML='<div class="activity-dialog-header"><h2 id="activity-dialog-title" data-activity="title"></h2><button type="button" data-activity="close"></button></div><div class="activity-dialog-copy"><p data-activity="assignment"></p><p data-activity="choice"></p><p data-activity="product"></p></div>';
  const supported=typeof dialog.showModal==='function'&&section;
  let opener=null,previousOverflow='';
  if(supported){
    document.body.appendChild(dialog);dialog.appendChild(section);
    document.addEventListener('click',event=>{
      const link=event.target.closest('a[href="#atividade"]');if(!link)return;
      event.preventDefault();opener=link;
      if(!dialog.open){previousOverflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden'}
      dialog.scrollTop=0;dialog.querySelector('button').focus();
    });
    dialog.querySelector('button').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;opener?.focus()});
    dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()});
    if(location.hash==='#atividade'){dialog.showModal();previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden'}
  }
  function translate(){const copy=text[document.documentElement.lang==='en'?'en':'pt'];document.querySelectorAll('[data-activity]').forEach(node=>node.textContent=copy[node.dataset.activity])}
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});translate();
})();
