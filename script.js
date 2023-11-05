// script.js
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const links = navbar.querySelectorAll('a');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      if (!link.classList.contains('active')) {
        link.style.color = '#00abf0'; // Hover color
      }
    });

    link.addEventListener('mouseout', () => {
      if (!link.classList.contains('active')) {
        link.style.color = 'var(--text-color)'; // Default text color
      }
    });
  });
  
});

