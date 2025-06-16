document.addEventListener('DOMContentLoaded', function () {
  /* Navigation underline and active link */
  const headerNav = document.querySelector('header nav');
  if (headerNav) {
    const links = headerNav.querySelectorAll('a.nav-link');
    const activate = (el) => {
      links.forEach(l => l.classList.remove('nav-active'));
      if (el) el.classList.add('nav-active');
    };
    links.forEach(link => {
      link.addEventListener('mouseenter', () => activate(link));
    });
    const current = Array.from(links).find(l => l.getAttribute('href') === window.location.pathname);
    if (current) activate(current);
  }

  /* Featured products scrolling */
  const container = document.querySelector('.featured-scroll-container');
  if (container) {
    const left = document.querySelector('.featured-scroll-left');
    const right = document.querySelector('.featured-scroll-right');
    const scroll = () => container.clientWidth * 0.8;
    left && left.addEventListener('click', () => {
      container.scrollBy({ left: -scroll(), behavior: 'smooth' });
    });
    right && right.addEventListener('click', () => {
      container.scrollBy({ left: scroll(), behavior: 'smooth' });
    });
  }

  /* Reveal animation */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -20% 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* Language selector */
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    const apply = (lang) => {
      document.documentElement.lang = lang;
      localStorage.setItem('lang', lang);
      const dict = window.MIRAL_TRANSLATIONS && window.MIRAL_TRANSLATIONS[lang];
      if (dict) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (key && dict[key]) {
            el.innerText = dict[key];
          }
        });
      }
    };
    const saved = localStorage.getItem('lang');
    if (saved) {
      langSelect.value = saved;
      apply(saved);
    } else {
      apply(langSelect.value);
    }
    langSelect.addEventListener('change', () => {
      apply(langSelect.value);
    });
  }
});
