<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar el autoload de Composer
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];  // El correo de la persona que llena el formulario
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Crear una instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP de Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Servidor SMTP de Gmail
        $mail->SMTPAuth = true;
        $mail->Username = 'milenabchancafe@gmail.com';  // Tu correo de Gmail
        $mail->Password = 'rwfb jbwd dcjb bauw';  // Contraseña de aplicación de Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Remitente y destinatario
        $mail->setFrom($email, $nombre);  // El correo de quien lo envía (la persona que llena el formulario)
        $mail->addAddress('milenabchancafe@gmail.com', 'Destinatario');  // El correo al que se enviará el formulario

        // Contenido del correo
        $mail->isHTML(true);  // Habilitar HTML
        $mail->Subject = "Nuevo mensaje de contacto: $asunto";
        $mail->Body    = "
        <b>Nombre:</b> $nombre<br>
        <b>Teléfono:</b> $telefono<br>
        <b>Correo:</b> $email<br>
        <b>Asunto:</b> $asunto<br>
        <b>Mensaje:</b><br>$mensaje
        ";

        // Enviar el correo
        $mail->send();

        // Solo ejecutar el código JavaScript después de enviar el correo
        echo "<script type='text/javascript'>
                window.onload = function() {
                    showModal();  // Muestra el modal cuando el formulario ha sido enviado con éxito
                }
              </script>";
    } catch (Exception $e) {
        echo "<script type='text/javascript'>
                alert('Hubo un error al enviar el mensaje: {$mail->ErrorInfo}');
                window.location = 'contactanos.html'; // Redirigir en caso de error
              </script>";
    }
}
?>
