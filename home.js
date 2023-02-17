const menu = document.querySelector('#mobile-menu');
const menuBars = document.querySelectorAll('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuBars.forEach(bar => bar.classList.toggle('active'));
});
