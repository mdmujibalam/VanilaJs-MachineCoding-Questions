const allBulbs=document.querySelectorAll(".light");

const colors=['red', 'yellow', 'green'];

let activeIndex=0;

(function(){
 setInterval(()=>{
    
 allBulbs.forEach((bulb, index)=>{
    bulb.style.backgroundColor = index === activeIndex ? colors[activeIndex]: 'white';
 });

 activeIndex=(activeIndex+1)%3;

 },1500);

})()