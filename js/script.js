document.querySelectorAll('nav a').forEach(a=>{
a.addEventListener('click',()=>console.log('Navigate:',a.getAttribute('href')));
});