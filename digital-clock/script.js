const monthArr=['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysArr=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const hourElement=document.getElementById("hour");
const minuteElement=document.getElementById('minute');
const secondElement=document.getElementById('seconds');

const dayElement=document.getElementById('day');
const dateElement=document.getElementById('date');
const monthElement=document.getElementById("month");
const yearElement=document.getElementById("year");

window.addEventListener('load', ()=>{
   setInterval(() => {
    const now=new Date();

    hourElement.textContent=now.getHours().toString();
    minuteElement.textContent=now.getMinutes().toString();
    secondElement.textContent=now.getSeconds().toString();

    dayElement.textContent=daysArr[now.getDay()];
    dateElement.textContent=now.getDate();
    monthElement.textContent=monthArr[now.getMonth()];
    yearElement.textContent=now.getFullYear();
   }, 1000);

})





// const mainElement=document.querySelector(".main-div");

// const timingElement=document.createElement("div");
// const dateElement=document.createElement("div");

// const now=new Date();

// const day=now.getDate();
// const month=1+now.getMonth();
// const year=now.getFullYear();

// dateElement.textContent=`${day}/${month}/${year}`;
// timingElement.textContent=now.toLocaleDateString();


// mainElement.appendChild(timingElement);
// mainElement.appendChild(dateElement);