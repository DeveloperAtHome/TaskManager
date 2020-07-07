class Login{

constructor(){

this.user={

username:null,
password:null

}

this.initApp=function(){

this.isValidForm()

}

}

isValidForm(){

  const testInput={

    username:/[a-z\d]{5,8}/i,
    password:/[a-z\d@\.-]{8,20}/
    
    }




let inputs=document.querySelectorAll('input');

inputs.forEach(input=>{

input.addEventListener('keyup',(e)=>{

this.onSignIn(e.target,testInput[e.target.attributes.name.value])

})

})


}

onSignIn(input,regex){

  //jel moze ovaj parametar regex dole da se koristi posto bi on trebalo da sadrzi taj test iz gornje fn..

let btn=document.querySelector('button');
let inputUser=document.querySelector('#login-username');
let inputPass=document.querySelector('#login-password');

btn.addEventListener('click',()=>{

 
if(inputUser.value.trim()=="" && inputPass.value.trim()==""){

inputUser.className='invalid'
inputPass.className='invalid'

}

else if(inputUser.value.trim()=="" && !inputPass.value.trim()==""){

inputUser.className="invalid"

}

else if(!inputUser.value.trim()=="" && inputPass.value.trim()==""){

  inputPass.className="invalid"
  
}

else if(regex.test(input.value)){


    this.login(input,regex)
    // this.dashboard() //treba da se napravi

}


})



}

login(input){

//ubacuju se podaci u user objekat
this.user[input.attributes.name.value]=input



}

dashboard(){


//need to code

}



}


const user1=new Login().initApp()









