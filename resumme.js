document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fade-in-element');

  function checkFade() {
    fadeElems.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        elem.classList.add('visible');
      } else {
        elem.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // Initial check on page load
});