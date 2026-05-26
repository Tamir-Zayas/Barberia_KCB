// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute('href'));
        if (seccion) {
            seccion.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animación fade-in al hacer scroll
const elementos = document.querySelectorAll('.fade-in');

function mostrarElementos() {
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', mostrarElementos);
mostrarElementos();

// Detectar página actual y marcar el enlace activo
const enlaces = document.querySelectorAll('#nav-menu a');
const paginaActual = window.location.pathname.split('/').pop();

enlaces.forEach(enlace => {
    if (enlace.getAttribute('href') === paginaActual) {
        enlace.classList.add('active');
    }
});
