<?php 

// Llamada a los campos del form
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Datos para el mail recibido
$carta = "Mensaje enviado por " . $nombre . "\r\n";
$carta .= "Su e-mail es: " . $email . "\r\n";
$carta .= "Asunto: $asunto \r\n";
$carta .= "Mensaje: $mensaje";

$destinatario = "bruno_freijomil@hotmail.com";
$origen = "CONTACTO - portfolio";

// Envio de Mensaje
mail($destinatario, $origen, $carta);
header('Location:exito.html');


?>