// Simple fade-in animation on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 150) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});
