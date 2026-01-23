const contactForm = document.getElementById('contact-form');
const inputs = document.querySelectorAll(' input');
const message = document.getElementById('message');
const form_input = document.getElementById('form_input-error');


const expressions = {
	name: /^[a-zA-ZA-Y\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  company: /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
  textarea:  /^[A-Za-z0-9]{5,1000}\.[A-Za-z0-9]{5,1000}$/
}

const fields ={
  name:false,
  company:false,
  email:false,
  phone:false,
  message:false
  
}



const validateform = (e) =>{
  switch(e.target.name){
      case "name":
        validateFields(expressions.name, e.target, 'name');
      break;
//       ///////
      case "company":
         validateFields(expressions.company, e.target, 'company');
      break;
//       //////
      case "email":
        validateFields(expressions.email, e.target, 'email');
      break;
//       //////
     case "phone":
      validateFields(expressions.phone, e.target, 'phone');
      
      break;
    
  }
};
const validateFields = (expression, input, fields) => {
   if(expression.test(input.value)){
         document.getElementById(`group_${fields}`).classList.remove('fields-incorrect');
         document.getElementById(`group_${fields}`).classList.add('fields-correct');
        document.querySelector(`#group_${fields} .form_input-error`).classList.remove('form_input-error-active');
       fields[fields] = true;
      }else{
        document.getElementById(`group_${fields}`).classList.add('fields-incorrect');
        document.getElementById(`group_${fields}`).classList.remove('fields-correct');
        document.querySelector(`#group_${fields} .form_input-error`).classList.add('form_input-error-active');
        fields[fields] = false;
      }
}


inputs.forEach((input) => {
  input.addEventListener('keyup',validateform );
   input.addEventListener('blur',validateform );
  
});
const validatetextarea = (e)=>{
  if(document.getElementById('message').value == ''){
  document.getElementById('group_text').classList.add('fields-incorrect'); 
  document.getElementById('group_text').classList.remove('fields-correct');
    form_input.classList.add('form_input-error-active');
    fields[message]= true;
  }else{
    
    document.getElementById('group_text').classList.add('fields-correct');
    document.getElementById('group_text').classList.remove('fields-incorrect');
    form_input.classList.remove('form_input-error-active');
    fields[message] = false;
  }
  
}  
   message.addEventListener('keyup',validatetextarea);
   message.addEventListener('blur',validatetextarea);
  
// fix submit 

$("#contact-form").submit(function(event){
  event.preventDefault();
  $("#contact-form");
 $.ajax({
  url: "contact-form.php",
  type:"post",
  data:$("#contact-form").serialize(),
  success:function(rest){
  //   $("").html(rest);
  document.getElementById('form_message-success').classList.add('form_message-success-active');
   setTimeout(() =>{
document.getElementById('form_message-success').classList.remove('form_message-success-active');       
           },5000);  
  
  }
 });
 
   $('#contact-form')[0].reset();  
});   

// var contactContainer = document.querySelector(".contact-container");
  

// console.log(contactContainer);