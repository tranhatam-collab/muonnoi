
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('mnLang') || 'vi';
  function setLang(lang){
    document.body.classList.remove('lang-vi','lang-en');
    document.body.classList.add('lang-'+lang);
    document.querySelectorAll('[data-lang-btn]').forEach(btn=>{
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn')===lang);
    });
    localStorage.setItem('mnLang',lang);
    document.documentElement.setAttribute('lang', lang === 'vi' ? 'vi' : 'en');
  }
  setLang(saved);
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-lang-btn]');
    if(btn){ setLang(btn.getAttribute('data-lang-btn')); }
  });
})();
