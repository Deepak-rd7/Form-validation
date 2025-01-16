

const form=document.querySelector('#form');
const userName=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cPassword=document.querySelector('#cpassword');
 
form.addEventListener("submit",function(e){
   if(!validateInputs()){
    e.preventDefault();
   }
});
function validateInputs(){
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cPassword.value.trim();
    let success=true;

    if(userNameVal==='')
    {
        success=false;
        setError(userName,'Name is required');
    }
    else{
        setSuccess(userName);
    }

    if(emailVal===''){
        success=false;
        setError(email,'email is required');
    }
    else if(!validateEmail(emailVal)){
        success=false;
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }

    if(passwordVal===''){
        success=false;
        setError(password,'Password is required');
    }
    else if(passwordVal.length<8)
    {
        success=false;
        setError(password,'Password Length must be atleast 8 Characters');
    }
    else{
        setSuccess(password);
    }

    if(cpasswordVal===''){
        success=false;
        setError(cPassword,'Confirm the passoword');
    }
    else if(cpasswordVal!==passwordVal){
        success=false;
        setError(cPassword,'Your Password does not match');
    }
    else{
        setSuccess(cPassword);
    }
    return success;
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message;

    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
    
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText='';

    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };