document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
if(menu&&nav)menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
const lang=document.getElementById('languageSelect');
if(lang){let saved='kaa';try{saved=localStorage.getItem('uniworld-language')||'kaa';}catch(e){}lang.value=saved;lang.addEventListener('change',()=>{try{localStorage.setItem('uniworld-language',lang.value);}catch(e){}document.documentElement.lang=lang.value;const note=document.getElementById('languageNotice');if(note)note.hidden=false;});}
const submit=document.getElementById('guideSubmit');
if(submit)submit.addEventListener('click',()=>{const topic=document.getElementById('guideTopic').value;const question=document.getElementById('guideQuestion').value.trim();const feedback=document.getElementById('guideFeedback');if(!question){feedback.textContent='Please write a short question first. / Iltimos, avval savolingizni yozing.';return;}feedback.textContent='Your request is structured under “'+topic+'”. Live AI is not connected yet, so nothing has been sent. / So‘rovingiz tayyorlandi, ammo AI ulanmagani sababli hech qayerga yuborilmadi.';});
