// Inicializa EmailJS
  emailjs.init("qqswIuJ7lWihIZO4S");

  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form_message-success");
  const btn = document.getElementById("form_btn");

  // Ocultar mensaje al cargar
  successMsg.style.display = "none";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Estado enviando
    btn.disabled = true;
    btn.textContent = "SENDING...";

    emailjs.send("service_ysfzu8r", "template_c6v8go9", {
      name: form.name.value,
      company: form.company.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    })
    .then(() => {
      successMsg.style.display = "block"; // ✅ mostrar mensaje

setTimeout(() =>{
           successMsg.style.display = "none";
      
           },5000);  


      form.reset();
    })
    .catch((error) => {
    //   console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "SUBMIT";
    });
  });

  // Ocultar mensaje si el usuario vuelve a escribir
  form.addEventListener("input", () => {

           successMsg.style.display = "none";       
  
  });