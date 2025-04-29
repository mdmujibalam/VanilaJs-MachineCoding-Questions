const startBtn=document.getElementById("start-btn");
const resetBtn=document.getElementById("reset-btn");

const hourElement=document.getElementById("hours");
const minElement=document.getElementById("mins");
const secElement=document.getElementById("sec");


let seconds, intv;

function initializeWatch(){
    hourElement.textContent="00";
    minElement.textContent="00";
    secElement.textContent="00";

    seconds=0;
}

window.addEventListener("load",()=>{
  initializeWatch();
});

startBtn.addEventListener("click",()=>{

     intv=setInterval(()=>{
        let currHours=Math.floor(seconds/3600);
        let currMins=Math.floor(seconds/60) - (60*currHours);
        let currSeconds=seconds- (60*currMins)-(3600*currHours);

        hourElement.textContent=currHours.toString().padStart(2,"0");
        minElement.textContent=currMins.toString().padStart(2,"0");
        secElement.textContent=currSeconds.toString().padStart(2,'0');

        seconds++;

    }, 1000);

});

resetBtn.addEventListener("click",()=>{

    clearInterval(intv);
    initializeWatch();
});