const form=document.getElementById("formContainer");

const fullNameInput=document.getElementById("fullName");
const mobileNoInput=document.getElementById("mobileNo");
const emailInput=document.getElementById("email");
const addressInput=document.getElementById("address");

let fullName ="";
let mobileNo="";
let email="";
let address="";

fullNameInput.addEventListener("change", (e)=>{
    fullName=e.target.value;
});

mobileNoInput.addEventListener("change", (e)=>{
    mobileNo=e.target.value;
});

emailInput.addEventListener("change", (e)=>{
    email=e.target.value;
});

addressInput.addEventListener("change", (e)=>{
    address=e.target.value;
});

const fullNameErrorSpan=document.getElementById("fullNameError");
const mobileNoErrorSpan=document.getElementById("mobileNoError");
const emailErrorSpan=document.getElementById("emailError");
const addressErrorSpan=document.getElementById("addressError");

const setError = (inputElement, errorSpan, errorMessage)=>{

    errorSpan.textContent= errorMessage;
    inputElement.style.border="1px solid red";
    errorSpan.style.color="red";
}

const removeError= (inputElement, errorSpan)=>{
    errorSpan.textContent='';  
    inputElement.style.border='';
    errorSpan.style.color='green';  
}


const validateForm= ()=>{
    let errorArr=[];

    if(fullName.length === 0){
      setError(fullNameInput, fullNameErrorSpan, "Fullname can not be empty ");
      errorArr.push("Fullname can not be empty");
    }
    else{
      removeError(fullNameInput, fullNameErrorSpan);
    }

    if(mobileNo.length === 0){
        setError(mobileNoInput, mobileNoErrorSpan, "Mobile No can not be empty ");
        errorArr.push("Mobile No can not be empty");
      }
      else{
        removeError(mobileNoInput, mobileNoErrorSpan);
    }

    if(email.length === 0){
        setError(emailInput, emailErrorSpan, "Email can not be empty ");
        errorArr.push("Email can not be empty");
    }
    else if(!email.includes('@')){
        setError(emailInput, emailErrorSpan, "Incorrect Format");
        errorArr.push('Incorrect Format');
    }
      else{
        removeError(emailInput, emailErrorSpan);
    }

    if(address.length === 0){
        setError(addressInput, addressErrorSpan, "Address can not be empty ");
        errorArr.push("Address can not be empty");
      }
      else{
        removeError(addressInput, addressErrorSpan);
    }
 return errorArr;
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let err=validateForm();

    if(err.length === 0){
        console.log("Form Submitted Successfully !!!", e.target.value)
         form.reset();
 
    }
    else{
        console.log("Unsuccessful submission !", err)
    }

})