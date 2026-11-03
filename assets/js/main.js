document.documentElement.classList.add('js');

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

if (toggle && links) {
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('open', open);
  }

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav')) setMenu(false);
  });

  window.matchMedia('(min-width: 651px)').addEventListener('change', () => setMenu(false));
}
