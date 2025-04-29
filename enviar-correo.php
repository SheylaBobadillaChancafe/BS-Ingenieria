<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Crear una instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP de Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'milenabchancafe@gmail.com';
        $mail->Password = 'rwfb jbwd dcjb bauw';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $nombre);
        $mail->addAddress('milenabchancafe@gmail.com', 'Destinatario');

        $mail->isHTML(true);
        $mail->Subject = "Nuevo mensaje de contacto: $asunto";
        $mail->Body = "<b>Nombre:</b> $nombre<br><b>Teléfono:</b> $telefono<br><b>Correo:</b> $email<br><b>Asunto:</b> $asunto<br><b>Mensaje:</b><br>$mensaje";

        // Enviar el correo
        $mail->send();
        
        echo 'success';
    } catch (Exception $e) {
     
        echo 'error';
    }
}
?>
