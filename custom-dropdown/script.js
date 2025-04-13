const options = [
    "Kolkata",
    "Pune",
    "Chandigarh",
    "Hyderabad",
    "Mumbai",
    "Bangalore",
];

const mainElement=document.querySelector(".main-div");
const labelElement= document.querySelector(".label");
const optionsList=document.querySelector(".options");

options.forEach((option)=>{
    const liItem=document.createElement('li');
    liItem.textContent=option;
    liItem.addEventListener('click', ()=>{
       labelElement.textContent=option;
       optionsList.style.display='none';  
    });
    optionsList.appendChild(liItem);
});

labelElement.addEventListener('click', ()=>{
   const isVisible = optionsList.style.display === 'block';
   optionsList.style.display = isVisible ? "none": "block";
});




