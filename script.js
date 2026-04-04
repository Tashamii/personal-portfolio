function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}

document.querySelectorAll('#sidebar-nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768)
      document.getElementById('sidebar').classList.remove('open');
  });
});

var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('#sidebar-nav a');

function onScroll() {
  var current = '';

  sections.forEach(function(sec) {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });

  navLinks.forEach(function(link) {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === '#' + current
    );
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
