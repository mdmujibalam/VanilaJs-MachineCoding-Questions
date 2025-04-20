const currentProgressElement=document.getElementById("current-progress");

let initialProgress=20;

currentProgressElement.style.width=`${initialProgress}%`;

window.addEventListener("load",()=>{

    const intv=setInterval(()=>{
      initialProgress+=10;
      currentProgressElement.style.width=`${initialProgress}%`;

      if(initialProgress>=100){
        clearInterval(intv);
    }

    },2000);

});