const navLinks = document.querySelectorAll('.nav__link');
const themeButton = document.getElementById('theme-button');
const scrollUpButton = document.getElementById('scroll-up');
const header = document.getElementById('header');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-link');
  }
});

if (themeButton) {
  themeButton.addEventListener('click', () => {
    console.log('Theme button clicked!'); // Debug line
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      themeButton.classList.remove('bx-moon');
      themeButton.classList.add('bx-sun');
    } else {
      themeButton.classList.remove('bx-sun');
      themeButton.classList.add('bx-moon');
    }
  });
}

window.addEventListener('scroll', () => {
  if (scrollUpButton) {
    if (window.scrollY >= 560) {
      scrollUpButton.classList.add('show-scroll');
    } else {
      scrollUpButton.classList.remove('show-scroll');
    }
  }

  if (header) {
    if (window.scrollY >= 50) {
      header.classList.add('shadow-header');
    } else {
      header.classList.remove('shadow-header');
    }
  }
});

if (scrollUpButton) {
  scrollUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
