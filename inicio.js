// Agrega la funcionalidad para mostrar/ocultar el menú en dispositivos móviles
const toggleMenu = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-collapse');

toggleMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Agrega la funcionalidad para cerrar el menú al hacer clic en un enlace
const navbarLinks = document.querySelectorAll('.nav-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('show');
  });
});
