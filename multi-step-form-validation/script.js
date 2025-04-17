const form=document.getElementById("contact-form");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const fullNameContainer=document.getElementById("fullNameContainer");
const mobileNoContainer=document.getElementById("mobileNoContainer");
const emailContainer=document.getElementById("emailContainer");
const addressContainer=document.getElementById("addressContainer");


const fullNameElement=document.getElementById("fullNameId");
const mobileNoElement=document.getElementById("mobileNoId");
const emailElement=document.getElementById("emailId");
const addressElement=document.getElementById("addressId");

const fullNameError=document.getElementById("fullNameError");
const mobileNoError=document.getElementById("mobileNoError");
const emailError=document.getElementById("emailError");
const addressError=document.getElementById("addressError");

const inputElements=[fullNameElement, mobileNoElement, emailElement, addressElement];
const fieldContainers=[fullNameContainer, mobileNoContainer, emailContainer, addressContainer]

let fullName='';
let mobileNo='';
let email='';
let address='';

let currentIdx=0;

fullNameElement.addEventListener('change',(e)=>{
   fullName= e.target.value;
});

mobileNoElement.addEventListener('change',(e)=>{
    mobileNo=e.target.value;
});

emailElement.addEventListener('change',(e)=>{
    email=e.target.value;
});

addressElement.addEventListener('change',(e)=>{
    address=e.target.value;
});

const setError=(inputElement,errorSpan, errorMsg)=>{
    errorSpan.textContent=errorMsg;
    inputElement.style.border="1px solid red";

};

const removeError=(inputElement, errorSpan)=>{
   errorSpan.textContent='';
   inputElement.style.border = "1px solid black";
}

const displayFormElement=(idx)=>{
    for(let i=0;i<fieldContainers.length;i++){
        if(i===idx)
        {
            fieldContainers[i].style.display='block';
        }
        else{
            fieldContainers[i].style.display='none';
        }
    }
}

window.addEventListener("load",(e)=>{
    displayFormElement(currentIdx);
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    let err = validateForm(currentIdx);
    if (err.length === 0) {
      currentIdx++;
      displayFormElement(currentIdx);
    }
    //console.log(err);
    if (currentIdx === inputElements.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "block";
    }
    //console.log(inputElements[currentIdx]);
});


const validateForm=(index)=>{

    let errArr=[];

    switch(index){
        case 0:
            if(fullName.length === 0){
                setError(fullNameElement, fullNameError, "FullName can not be empty");
                errArr.push("FullName can not be empty");
            }
            else{
              removeError(fullNameElement, fullNameError);
            }
            break;
        
        case 1:
            if(mobileNo.length === 0){
                setError(mobileNoElement, mobileNoError, "Mobile Number can not be empty");
                errArr.push("Mobile Number can not be empty");
            }
            else{
              removeError(mobileNoElement, mobileNoError);
            }
            break;

        case 2:
            if(email.length === 0){
                setError(emailElement, emailError, "Email can not be empty");
                errArr.push("Email can not be empty");
            }
            else if (!email.includes("@")) {
                setError(emailElement, emailError, "Incorrect Format");
                errArr.push("Incorrect Format");
            }
            else{
              removeError(emailElement, emailError);
            }
            break;

        case 3:
            if(address.length === 0){
                setError(addressElement, addressError, "Address can not be empty");
                errArr.push("Address can not be empty");
            }
            else{
              removeError(addressElement, addressError);
            }
            break;

        default:
            break;

    }

    return errArr;
};

form.addEventListener('submit',(e)=>{
 e.preventDefault();

 let errors=validateForm(fieldContainers.length -1);

 if(errors.length === 0)
{
    console.log('✅ Form submitted successfully');
}
else{
   console.log("Unsuccessful submission !")
}

});