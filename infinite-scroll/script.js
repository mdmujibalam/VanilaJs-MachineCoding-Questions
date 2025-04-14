/*const container=document.querySelector(".content-container");

let count=0;

const addMoreItems=()=>{
    for(let i=0;i<15;i++){
        const newElement=document.createElement("div");
        newElement.textContent=`Div ${count++}`;
        newElement.classList.add("new-div");
        container.appendChild(newElement);
    }
}

window.addEventListener("scroll", ()=>{
    const scrollTop=window.scrollY;
    const windowHeight=window.innerHeight;
    const documentHeight=document.body.scrollHeight;

    if(scrollTop+windowHeight+50 >= documentHeight)addMoreItems();
})

addMoreItems();*/

//Above approach is not optimised, so we are going to use Intersection Observer API method which is more optimal

const container = document.querySelector('.content-container');
const sentinel = document.querySelector('.sentinel');

let count = 0;

const addMoreItems=()=>{
    for(let i=0;i<15;i++){
        const newElement=document.createElement("div");
        newElement.textContent=`Div ${count++}`;
        newElement.classList.add("new-div");
        container.appendChild(newElement);
    }
}

window.addEventListener('load', () => {
    addMoreItems();
});

const intersectionObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if(entry.isIntersecting){
        addMoreItems();
    }
   })
})

intersectionObserver.observe(sentinel);