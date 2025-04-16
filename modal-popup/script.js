const openModalBtn=document.getElementById("open-modal-btn");
const closeModalBtn=document.getElementById("close-modal-btn");
const modalSectionElement=document.querySelector(".modal-section");

openModalBtn.addEventListener('click',()=>{
    modalSectionElement.classList.add("active");

});

closeModalBtn.addEventListener('click',()=>{
     modalSectionElement.classList.toggle("active");

});





