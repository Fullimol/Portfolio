// sistema del DarkMode (Se repite en ambos JS)
let botonSwitch = document.getElementById("boton-switch")
let cambioDark = document.getElementsByClassName("cambioDark")
let darkMode = Array.from(document.getElementsByClassName("darkMode")); //se agregar "array.from" porque sino no funcionaba el forEach


let isClicked = JSON.parse(localStorage.getItem('isClicked')) || false; //Guarda el estado del DarkMode en el storage, si nunca se guardó antes comienza con el valor false

if(isClicked) {
    darkMode.forEach(element => element.classList.add('cambioDark'))
}

botonSwitch.addEventListener('click', () => {
    isClicked = !isClicked;
    localStorage.setItem('isClicked', JSON.stringify(isClicked));
    console.log(`El dark mode se encuentra: ${isClicked}`)

    if (isClicked) { //si el estado es TRUE se pone en darkmode agregando la clase indicada
        darkMode.forEach(element => element.classList.add('cambioDark'));
    } else { //si es FALSE elimina la clase
        darkMode.forEach(element => element.classList.remove('cambioDark'));
    }
});


// INFO: para quitar este efecto, eliminar las clases "darkMode", en el CSS la clase "cambioDark" modifica los estilos


// se busca en cada "clase 1" (darkMode), para que despues la detecte y le agrege la "clase 2" (cambioDark)
// botonSwitch.addEventListener("click", function () {
//     for (var i = 0; i < darkMode.length; i++) {
//         darkMode[i].classList.toggle("cambioDark"); // "darkMode" busca y le agrega la "clase 2 (cambiodark)"
//     }
// })