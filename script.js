// Seleccionar el ícono de hamburguesa y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Añadir un evento para alternar la clase 'show' al hacer clic en el ícono de hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');  // Alternar la clase 'show' para mostrar/ocultar el menú
});


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Función para agregar la clase de animación cuando se haga scroll
function handleScroll() {
    // Animar los textos en .text-container2
    const textContainer = document.querySelector('.text-container2');
    if (isElementInViewport(textContainer)) {
        const textElements = textContainer.querySelectorAll('.text');
        textElements.forEach(element => {
            element.classList.add('visible');
        });

        const iconElements = textContainer.querySelectorAll('.iconos-container2');
        iconElements.forEach(element => {
            element.classList.add('visible');
        });
    }

    // Animar el <h2> en .inicio-container3
    const container3 = document.querySelector('.inicio-container3');
    if (isElementInViewport(container3)) {
        const heading = container3.querySelector('h2');
        heading.classList.add('visible');
    }
}

// Ejecutar la función handleScroll cuando se haga scroll
window.addEventListener('scroll', handleScroll);

// También ejecutamos handleScroll en caso de que los contenedores ya estén visibles al cargar la página
window.addEventListener('load', handleScroll);