// Menú móvil
const menuMovil = document.getElementById('menu-movil');
const navUl = document.querySelector('nav ul');

if (menuMovil) {
    menuMovil.addEventListener('click', () => {
        navUl.classList.toggle('activo');
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navUl.classList.remove('activo');
    });
});

// Formulario de contacto
const formContacto = document.getElementById('form-contacto');
const respuesta = document.getElementById('respuesta-form');

if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        if (nombre === '') {
            respuesta.textContent = '❌ Por favor ingresa tu nombre.';
            respuesta.style.color = 'red';
            return;
        }
        respuesta.textContent = '✅ ¡Gracias ${nombre}! Te contactaremos pronto.;'
        respuesta.style.color = '#c6a43f';
        formContacto.reset();
        setTimeout(() => respuesta.textContent = '', 4000);
    });
}