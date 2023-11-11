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

    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default behavior of the link

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Close the navbar menu if it's open
      navbar.classList.remove('open');

      // Update the active state of the links
      updateActiveState(link);
    });
  });

  // Listen for scroll events to update the active state of the links
  window.addEventListener('scroll', () => {
    links.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (isElementInViewport(targetSection)) {
        updateActiveState(link);
      }
    });
  });

  // Function to update the active state of the links
  function updateActiveState(activeLink) {
    links.forEach(link => {
      link.classList.remove('active');
      link.style.color = 'var(--text-color)'; // Reset color on scroll
    });
    activeLink.classList.add('active');
    activeLink.style.color = '#00abf0'; // Set active color
  }

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
