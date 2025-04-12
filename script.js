// Seleccionar el ícono de hamburguesa y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Añadir un evento para alternar la clase 'show' al hacer clic en el ícono de hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');  // Alternar la clase 'show' para mostrar/ocultar el menú
});



// Script para agregar la clase "active" al enlace correspondiente en función de la página actual
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname; // Obtiene la ruta de la URL

    // Obtiene todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.nav .menu li a');

    menuLinks.forEach(link => {
        // Excluye el enlace de "Contacto" de la clase "active"
        if (link.getAttribute('href') !== "contactanos.html") {  // Modifica el href si tu ruta es diferente
            if (currentLocation.includes(link.getAttribute('href'))) {
                link.classList.add('active');  // Añade la clase "active"
            }
        }
    });
});


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}


function handleScroll() {
    // INICIO

    // Animar textos en .text-container2
    const textContainer = document.querySelector('.text-container2');
    if (textContainer && isElementInViewport(textContainer)) {
        const textElements = textContainer.querySelectorAll('.text');
        textElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });

        const iconElements = textContainer.querySelectorAll('.iconos-container2');
        iconElements.forEach(el => {
            if (!el.classList.contains('visible-iconos')) {
                el.classList.add('visible-iconos');
            }
        });
    }

    // Animar .text-servicios en .inicio-container3
    const container3 = document.querySelector('.inicio-container3');
    if (container3 && isElementInViewport(container3)) {
        const servicios = container3.querySelector('.text-servicios');
        if (servicios && !servicios.classList.contains('visible-servicios')) {
            servicios.classList.add('visible-servicios');
        }
    }

    // Animar .text-proyectos en .inicio-container4
    const container4 = document.querySelector('.inicio-container4');
    if (container4 && isElementInViewport(container4)) {
        const proyectos = container4.querySelector('.text-proyectos');
        if (proyectos && !proyectos.classList.contains('visible-proyectos')) {
            proyectos.classList.add('visible-proyectos');
        }
    }

    // NOSOTROS

    // Animar .mision y .vision cuando .nosotros-container2 entra en viewport
    const containerNosotros2 = document.querySelector('.nosotros-container2');
    if (containerNosotros2 && isElementInViewport(containerNosotros2)) {
        const mision = containerNosotros2.querySelector('.mision');
        if (mision && !mision.classList.contains('visible-left')) {
            mision.classList.add('visible-left');
        }

        const vision = containerNosotros2.querySelector('.vision');
        if (vision && !vision.classList.contains('visible-right')) {
            vision.classList.add('visible-right');
        }
    }

    // Animar .text-valores cuando .nosotros-container3 entra en viewport
    const containerNosotros3 = document.querySelector('.nosotros-container3');
    if (containerNosotros3 && isElementInViewport(containerNosotros3)) {
        const valores = containerNosotros3.querySelector('.text-valores');
        if (valores && !valores.classList.contains('visible-fade')) {
            valores.classList.add('visible-fade');
        }
    }

 
 // SERVICIOS
    const containersServicios2 = document.querySelectorAll('.s-container2'); // Selecciona todos los elementos con la clase '.s-container2'
        
    containersServicios2.forEach(container => { // Itera sobre cada elemento encontrado
        if (isElementInViewport(container)) {  // Verifica si el contenedor está en el viewport
            // Animación para imagen (aparece desde la izquierda)
            const imgservicios = container.querySelector('.imgservicios');
            if (imgservicios && !imgservicios.classList.contains('visible-left-imgservicios')) {
                imgservicios.classList.add('visible-left-imgservicios');  // Agrega la clase para la animación de la imagen
            }

            // Animación para texto (aparece desde la derecha)
            const textservicios = container.querySelector('.text-servicio1');
            if (textservicios && !textservicios.classList.contains('visible-right-textservicio1')) {
                textservicios.classList.add('visible-right-textservicio1');  // Agrega la clase para la animación del texto
            }
        }
    });
}


// Ejecutar la función handleScroll cuando se haga scroll
window.addEventListener('scroll', handleScroll);

// También ejecutamos handleScroll en caso de que los contenedores ya estén visibles al cargar la página
window.addEventListener('load', handleScroll);

