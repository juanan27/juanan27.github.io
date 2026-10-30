// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  links.classList.toggle('open', open);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

links.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

// Highlight the nav link for the section currently in view.
// New sections are picked up automatically once they have a nav link.
const navLinks = [...links.querySelectorAll('a[href^="#"]')];
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function updateActive() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let current = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) current = section;
  }
  // The last section may be too short to reach the threshold, so pick it at the bottom of the page.
  if (atBottom && sections.length) current = sections[sections.length - 1];
  navLinks.forEach((a) => {
    a.classList.toggle('active', current !== null && a.getAttribute('href') === '#' + current.id);
  });
}

window.addEventListener('scroll', updateActive, { passive: true });
updateActive();
