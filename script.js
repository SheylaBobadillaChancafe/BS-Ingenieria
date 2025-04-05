// Seleccionar el ícono de hamburguesa y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Añadir un evento para alternar la clase 'show' al hacer clic en el ícono de hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');  // Alternar la clase 'show' para mostrar/ocultar el menú
});
