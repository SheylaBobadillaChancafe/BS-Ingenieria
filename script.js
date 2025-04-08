// Seleccionar el ícono de hamburguesa y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Añadir un evento para alternar la clase 'show' al hacer clic en el ícono de hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');  // Alternar la clase 'show' para mostrar/ocultar el menú
});
// Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        
        // Verifica si el contenedor .text--container2 está en el viewport
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Función para agregar la clase de animación cuando se haga scroll
    function handleScroll() {
        const container = document.querySelector('.text--container2'); // Selecciona el contenedor .text--container2

        // Verifica si el contenedor .text--container2 está en el viewport
        if (isElementInViewport(container)) {
            // Agregar la clase 'visible' a todos los elementos .text dentro de .text--container2
            const textElements = container.querySelectorAll('.text');
            textElements.forEach(element => {
                element.classList.add('visible');
            });

            // Agregar la clase 'visible' a .iconos-container2 para activar la animación
            const iconElements = container.querySelectorAll('.iconos-container2');
            iconElements.forEach(element => {
                element.classList.add('visible');
            });
        }
    }

    // Ejecutar la función handleScroll cuando se haga scroll
    window.addEventListener('scroll', handleScroll);

    // También ejecutamos handleScroll en caso de que el contenedor .text--container2 ya esté visible al cargar la página
    window.addEventListener('load', handleScroll);