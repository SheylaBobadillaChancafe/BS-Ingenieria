
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Muestra el SweetAlert de carga
    Swal.fire({
        title: 'Enviando...',
        text: 'Por favor, espera un momento.',
        showConfirmButton: false,
        allowOutsideClick: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    const formData = new FormData(this);

    // Usar fetch para enviar los datos sin recargar la página
    fetch('../enviar-correo.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        Swal.close();  // Cierra el loading de SweetAlert
        if (data.includes('success')) {
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado con éxito!',
                showConfirmButton: false,
                timer: 2000
            }).then(function () {
                window.location.reload();
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Hubo un problema!',
                text: 'No se pudo enviar el mensaje.'
            });
        }
    })
    .catch(error => {
        Swal.close();
        Swal.fire({
            icon: 'error',
            title: '¡Hubo un error!',
            text: 'No se pudo enviar el mensaje.'
        });
    });
});
