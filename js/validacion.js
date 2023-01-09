const form = document.querySelector("form")
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("subjet")
const textaera = document.getElementById("message")
const boton = document.getElementById("submit-button")


// validación de input de nombre - mail
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

boton.addEventListener('click', function (e) {
  validacionMail = document.getElementById("validacionMail")
  validacionName = document.getElementById("validacionName")

    if (nombre.value === '') {
      validacionName.innerText = "■ Falta el nombre"
      event.preventDefault();
    }
    if (nombre.value.length >= 1) {
      validacionName.innerText = ""
    }

    if (email.value === '') {
    console.log("Mail VACIO")
    validacionMail.innerText = "■ Falta Email";
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





// validación del input de Email
// emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// boton.addEventListener('click', function (e) {
//   validacionMail = document.getElementById("validacionMail")

//     if (email.value === '') {
//     console.log("Mail VACIO")
//     validacionMail.innerText = "■ Falta completar el campo de Email";
//     event.preventDefault();
    
//    } else if (!emailRegex.test(email.value)) {
//       console.log("Mail INCORRECTO")
//       validacionMail.innerText = "■ El Email ingresado es incorrecto";
//       event.preventDefault();
//     } else {
//       console.log("Mail VALIDO")
//       validacionMail.innerText = "";
//     }
// });