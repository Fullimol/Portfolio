const form = document.querySelector("form")
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("subject")
const textarea = document.getElementById("message")
const boton = document.getElementById("submit-button")

emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// validación de input de nombre y mail
boton.addEventListener('click', function (e) {
  validacionMail = document.getElementById("validacionMail")
  validacionName = document.getElementById("validacionName")

  if (nombre.value === '') {
    console.log("nombre VACIO")
    validacionName.innerText = "■ Falta su nombre"
    event.preventDefault();
  }
  if (nombre.value.length >= 1) {
    validacionName.innerText = ""
  }

  if (email.value === '') {
    console.log("Mail VACIO")
    validacionMail.innerText = "■ Falta su Email";
    event.preventDefault();
    return
  }
  if (!emailRegex.test(email.value)) {
    console.log("Mail INCORRECTO")
    validacionMail.innerText = "■ Email incorrecto";
    event.preventDefault();
  } else {
    console.log("Mail VALIDO")
    validacionMail.innerText = "";
  }
});

// validación de input de asunto y texto
boton.addEventListener('click', function (e) {
  validacionAsunto = document.getElementById("validacionAsunto")
  validacionTexto = document.getElementById("validacionTexto")

  if (textarea.value === '') {
    console.log("texto incompleto")
    validacionTexto.innerText = "■ Falta su mensaje"
    event.preventDefault();
  }
  if (textarea.value.length >= 1) {
    console.log("Texto COMPLETO")
    validacionTexto.innerText = ""
  }
  if (asunto.value === '') {
    console.log("Asunto vacio")
    validacionAsunto.innerText = "■ Falta el asunto"
    event.preventDefault();
  }
  if (asunto.value.length >= 1) {
    console.log("Asunto completado")
    validacionAsunto.innerText = ""
  }
});

