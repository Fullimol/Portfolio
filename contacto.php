<?php 

// Llamada a los campos del form
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Datos para el mail recibido
$destinatario = "bruno_freijomil@hotmail.com";
$asunto = "CONTACTO - portfolio";

$carta = "De: $nombre \n";
$carta .= "Email: $email \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Mensaje: $mensaje";

// Envio de Mensaje
mail($destinatario, $asunto, $carta);
// header('Location:contact.html')


?>