document.addEventListener("DOMContentLoaded",()=>{

const links=document.querySelectorAll('a[href^="#"]');

links.forEach(link=>{

link.addEventListener("click",e=>{

const target=document.querySelector(link.getAttribute("href"));

if(!target)return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});

const cards=document.querySelectorAll(

".project-card,.skill-card,.stat-card,.timeline-content"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .7s ease";

observer.observe(card);

});

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.style.background="rgba(8,8,8,.96)";

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

navbar.style.background="rgba(8,8,8,.88)";

navbar.style.boxShadow="none";

}

});

});
