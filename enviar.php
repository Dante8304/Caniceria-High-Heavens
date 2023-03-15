<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $destino = 'leaveamlikethat@gmail.com';
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;

    $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($destino, 'Mensaje desde el sitio web', $contenido, $headers);

    header('Location: contactos.html?enviado=true');
    exit;

}

?>


