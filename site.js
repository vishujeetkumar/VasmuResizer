(function(){
  var root=document.documentElement;
  function ready(f){if(document.readyState!=='loading')f();else document.addEventListener('DOMContentLoaded',f)}
  ready(function(){
    var toggle=document.querySelector('.sh-toggle'),nav=document.getElementById('sh-nav'),theme=document.querySelector('.sh-theme');
    function setOpen(o){if(!toggle||!nav)return;nav.setAttribute('data-open',o?'true':'false');toggle.setAttribute('aria-expanded',o?'true':'false')}
    if(toggle&&nav){
      toggle.addEventListener('click',function(){setOpen(nav.getAttribute('data-open')!=='true')});
      nav.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
      document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});
    }
    if(theme){
      theme.addEventListener('click',function(){
        var cur=root.getAttribute('data-theme')||(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
        var next=cur==='dark'?'light':'dark';
        root.setAttribute('data-theme',next);
        try{localStorage.setItem('vr-theme',next)}catch(e){}
      });
    }
    var here=(location.pathname.split('/').pop()||'index.html');
    Array.prototype.forEach.call(document.querySelectorAll('.sh-nav a'),function(a){
      var f=(a.getAttribute('href')||'').split('#')[0].split('/').pop();
      if(f&&f===here)a.setAttribute('aria-current','page');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-year]'),function(n){n.textContent=new Date().getFullYear()});
  });
})();
