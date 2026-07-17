
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:"translateY(40px)"},{opacity:1,transform:"translateY(0)"}],{duration:700,fill:"forwards"});obs.unobserve(e.target)}}));
document.querySelectorAll(".card,.glass").forEach(x=>{x.style.opacity=0;obs.observe(x);});
