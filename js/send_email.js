emailjs.init("gh7LV2H7Kude8P2YA");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_epsag8q", "TEMPLATE_27plumd", {
    name: name.value,
    email: email.value,
    message: message.value
  })
  .then(() => {
    alert("MESSAGE SENT SUCCESSFULLY ✅");
  })
  .catch(() => {
    alert("THERE IS AN ERROR WITH YOUR MESSAGE ❌");
  });
});
