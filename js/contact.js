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
  name: false,
  company: false,
  email: false,
  phone: false,
  message: false
}

const validateform = (e) =>{
  switch(e.target.name){
      case "name":
        validateFields(expressions.name, e.target, 'name');
      break;
      case "company":
         validateFields(expressions.company, e.target, 'company');
      break;
      case "email":
        validateFields(expressions.email, e.target, 'email');
      break;
     case "phone":
      validateFields(expressions.phone, e.target, 'phone');
      break;
  }
};

const validateFields = (expression, input, fieldName) => {
   if(expression.test(input.value)){
         document.getElementById(`group_${fieldName}`).classList.remove('fields-incorrect');
         document.getElementById(`group_${fieldName}`).classList.add('fields-correct');
         document.querySelector(`#group_${fieldName} .form_input-error`).classList.remove('form_input-error-active');
         fields[fieldName] = true;
      }else{
        document.getElementById(`group_${fieldName}`).classList.add('fields-incorrect');
        document.getElementById(`group_${fieldName}`).classList.remove('fields-correct');
        document.querySelector(`#group_${fieldName} .form_input-error`).classList.add('form_input-error-active');
        fields[fieldName] = false;
      }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validateform);
  input.addEventListener('blur', validateform);
});

const validatetextarea = (e)=>{
  if(document.getElementById('message').value.trim() == ''){
    document.getElementById('group_text').classList.add('fields-incorrect'); 
    document.getElementById('group_text').classList.remove('fields-correct');
    form_input.classList.add('form_input-error-active');
    fields['message'] = false;
  }else{
    document.getElementById('group_text').classList.add('fields-correct');
    document.getElementById('group_text').classList.remove('fields-incorrect');
    form_input.classList.remove('form_input-error-active');
    fields['message'] = true;
  }
} 

message.addEventListener('keyup', validatetextarea);
message.addEventListener('blur', validatetextarea);
  
// fix submit con reCAPTCHA v3 y AJAX habilitado
$("#contact-form").submit(function(event){
  event.preventDefault();

  // Forzamos una validación rápida del textarea por si enviaron sin tocarlo
  validatetextarea();

  if(fields.name && fields.email && fields.message){

      // Ejecutamos reCAPTCHA v3 de forma asíncrona antes de enviar por AJAX
      grecaptcha.ready(function() {
          grecaptcha.execute('6Ld4JagpAAAAAM3zh7Q1gF2L78hGZvEzIlL-B10r', {action: 'submit'}).then(function(token) {
              
              // Serializamos los datos del formulario y añadimos el token del captcha
              let formData = $("#contact-form").serialize() + "&g-recaptcha-response=" + encodeURIComponent(token);

              $.ajax({
                  url: "https://studio24.karenshauling.com/contact-form.php",
                  type: "post",
                  data: formData,
                  success: function(rest){
                      // Muestra el mensaje de éxito
                      document.getElementById('form_message-success').classList.add('form_message-success-active');
                      setTimeout(() => {
                          document.getElementById('form_message-success').classList.remove('form_message-success-active');      
                      }, 5000); 

                      $('#contact-form')[0].reset();  
                  },
                  error: function(xhr, status, error) {
                      console.log("Estado HTTP:", xhr.status);
                      console.log("Respuesta del servidor:", xhr.responseText);
                      console.log("Error general:", error);
                  }
              });

          });
      });

  } else {
      // Texto de alerta completamente en inglés
      alert("Please fill in the required fields correctly before submitting.");
  }
});