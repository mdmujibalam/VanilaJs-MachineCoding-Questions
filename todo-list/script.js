const inputElement=document.getElementById("inputBox");
const addBtn=document.getElementById("add-btn");
const listItems=document.getElementById("items-section");

let currInputString='';

inputElement.addEventListener("change",(e)=>{
    currInputString=e.target.value;
})

addBtn.addEventListener("click",()=>{

    if(currInputString===''){
        alert("Input Field can not be empty");
    }
    else{
        const currItem=document.createElement("div");
        const titleElement=document.createElement("span");
        titleElement.textContent=currInputString
        currInputString='';
        inputElement.value='';

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.addEventListener("click",()=>{
           //currItem.style.display="none";
           listItems.removeChild(currItem);
        });

        currItem.appendChild(titleElement);
        currItem.appendChild(deleteBtn);

        listItems.appendChild(currItem);
    }

})