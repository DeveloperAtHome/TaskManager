class User{

  constructor(){
  
  this.inputs=document.querySelectorAll('input');

  this.regex={

    username:/^[a-z\d]{5,8}$/i,
    password:/^[\w@-]{8,20}$/  
  
    }     

  
  }


info(){

this.inputs.forEach(input=>{

input.addEventListener('keyup',(e)=>{


  


this.validator(e.target,this.regex[e.target.attributes.name.value]) 
                               
})



})



}


 
validator(input,regex){

if(regex.test(input.value)){

input.className='valid'



}else{

input.className='invalid'

}



this.changePage()


}




changePage(){


  let btn=document.querySelector('button')
  


    btn.addEventListener('click',(e)=>{

      e.preventDefault();
      
      for(let i=0; i<this.inputs.length; i++){

        if(this.inputs[i].classList.contains('invalid') || (this.inputs[i].value=="")){
      
         return false
      
        }
        
      
        else if(this.inputs[i].classList.contains('valid') || (this.inputs[i].value=="")){
      
         return false
      
        }
        
      
        else{
      
          document.querySelector('body').style.opacity="0"
      
        }
      
      
        
      }
      

    })


  


}

}

const user1=new User().info();






