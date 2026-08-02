// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const scrim = document.getElementById('scrim');

function closeNav(){
  sidebar.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  scrim.classList.remove('show');
}

function openNav(){
  sidebar.classList.add('open');
  navToggle.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  scrim.classList.add('show');
}

navToggle.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeNav() : openNav();
});

scrim.addEventListener('click', closeNav);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Scroll-spy: highlight active section link
const sections = document.querySelectorAll('main .section, main .hero');
const navLinks = document.querySelectorAll('.nav-link');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(section => {
  if (section.id) spy.observe(section);
});
