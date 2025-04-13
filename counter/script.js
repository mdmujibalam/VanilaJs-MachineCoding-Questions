const countElement=document.getElementById("count");
const increaseBtnElement= document.getElementById("increase");
const decreaseBtnElement= document.getElementById("decrease");

let count=0;
countElement.textContent=count;

increaseBtnElement.addEventListener("click", ()=>{
    count++;
    countElement.textContent=count;

});

decreaseBtnElement.addEventListener("click", ()=>{
    count--;
    countElement.textContent=count;
});