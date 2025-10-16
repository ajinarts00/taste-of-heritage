/* scripts.js — small helpers (loaded on pages) */
document.addEventListener('DOMContentLoaded', function(){
  // Nothing required; placeholder for future enhancements.
  // Example: smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });
});
