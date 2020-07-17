class Register{

user={

firstName:undefined,
lastName:undefined,
email:undefined,
mobileNumber:undefined,
password:undefined,
confirmPassword:undefined

}

constructor(){

this.initApp()

}

initApp=()=>{

//Get login and register container  
this.loginDiv=document.querySelector('#login-container');
this.registerDiv=document.querySelector('.register');

//Get text validations for certain inputs
this.firstNameValidationText=document.querySelector('.firstName-validation-text');
this.lastNameValidationText=document.querySelector('.lastName-validation-text');
this.emailValidationText=document.querySelector('.email-validation-text');
this.phoneValidationText=document.querySelector('.phone-validation-text');
this.registerPasswordText=document.querySelector('.register-password-validation');
this.confirmValidationText=document.querySelector('.confirm-password-validation');

//Get input elements
this.firstName=document.querySelector('.regFirstName');
this.lastName=document.querySelector('.regLastName');
this.email=document.querySelector('.regEmail');
this.mobileNumber=document.querySelector('.regMobileNumber');
this.password=document.querySelector('.regPassword');
this.confirmPassword=document.querySelector('.confirmPassword');



// Hide/show certain containers
document.querySelector('#login-container a').addEventListener('click',()=>{

  this.loginDiv.classList.replace('show','hide');
  this.registerDiv.classList.replace('hide','show');

})

document.querySelector('.register a').addEventListener('click',()=>{

  this.loginDiv.classList.replace('hide','show');
  this.registerDiv.classList.replace('show','hide');

})

//Get Sign Up button
document.querySelector('.regBtn').addEventListener('click',this.onSignIn)


}

isValidForm=()=>{

const firstNameRegex=/^[a-z\d]{5,8}$/i;
const lastNameRegex=/^[a-z\d]{8,12}$/i;
const emailRegex=/^([a-z\d\.]+)@([a-z]{2,8})\.([a-z]{2,5})$/;
const mobilePhoneRegex=/^\d{10}$/;
const passwordRegex=/^[\w@\.-]{8,20}$/i;


let valid=true;


if(!this.user.firstName || !firstNameRegex.test(this.user.firstName)){

this.firstNameValidationText.innerText='Must be 5-8 characters long'
valid=false; 

}else{

this.firstNameValidationText.innerText=""

}

if(!this.user.lastName || !lastNameRegex.test(this.user.lastName)){

this.lastNameValidationText.innerText='Must be 8-12 characters long'
  valid=false;

}else{

this.lastNameValidationText.innerText=""

}


if(!this.user.email || !emailRegex.test(this.user.email)){

  this.emailValidationText.innerText='Wrong password pattern'
    valid=false;
  
}else{
  
  this.emailValidationText.innerText=""
  
}


if(!this.user.mobileNumber|| !mobilePhoneRegex.test(this.user.mobileNumber)){

  this.phoneValidationText.innerText='Must be 10 characters long'
      valid=false;
    
}else{
    
this.phoneValidationText.innerText=""
    
}


if(!this.user.password || !passwordRegex.test(this.user.password)){

  this.registerPasswordText.innerText='Must be 8-20 characters long'
      valid=false;
    
}else{
    
this.registerPasswordText.innerText=""
    
}

if((this.user.confirmPassword!==this.user.password) || !this.user.confirmPassword ){

this.confirmValidationText.innerText="Password did not match"
valid=false

}else{

this.confirmValidationText.innerText=""

}



return valid

}

onSignIn=()=>{

this.user.firstName=this.firstName.value?this.firstName.value.trim():undefined;  
this.user.lastName=this.lastName.value?this.lastName.value.trim():undefined;  
this.user.email=this.email.value?this.email.value.trim():undefined;
this.user.mobileNumber=this.mobileNumber.value?this.mobileNumber.value.trim():undefined;
this.user.password=this.password.value?this.password.value.trim():undefined;
this.user.confirmPassword=this.confirmPassword.value?this.confirmPassword.value.trim():undefined;



let result=this.isValidForm()

if(result){

console.log("it works!!");  

}



}





}

new Register()