/* ===== THEME MANAGEMENT ===== */
(function () {
  const stored = localStorage.getItem('theme');
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored);
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

/* ===== MAIN SCRIPT ===== */
document.addEventListener('DOMContentLoaded', function () {
  /* --- Theme Toggle --- */
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  /* --- Mobile Menu --- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu(open) {
    if (open) {
      navMenu.classList.add('open');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-label', 'Close menu');
      hamburger.setAttribute('aria-expanded', 'true');
    } else {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-label', 'Open menu');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  hamburger.addEventListener('click', function () {
    toggleMenu(!navMenu.classList.contains('open'));
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(false);
    });
  });

  /* --- Navbar Shadow on Scroll --- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* --- Active Link on Scroll --- */
  const sections = document.querySelectorAll('section[id]');

  function highlightActiveLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveLink);

  /* --- Reveal on Scroll --- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* --- Contact Form Validation --- */
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const successMsg = document.getElementById('form-success');

  function showError(input, errorEl, message) {
    input.classList.add('invalid');
    errorEl.textContent = message;
  }

  function clearError(input, errorEl) {
    input.classList.remove('invalid');
    errorEl.textContent = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  nameInput.addEventListener('input', function () {
    clearError(nameInput, nameError);
  });
  emailInput.addEventListener('input', function () {
    clearError(emailInput, emailError);
  });
  messageInput.addEventListener('input', function () {
    clearError(messageInput, messageError);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    successMsg.classList.remove('visible');
    let valid = true;

    if (nameInput.value.trim() === '') {
      showError(nameInput, nameError, 'Please enter your name.');
      valid = false;
    } else {
      clearError(nameInput, nameError);
    }

    if (emailInput.value.trim() === '') {
      showError(emailInput, emailError, 'Please enter your email.');
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailInput, emailError);
    }

    if (messageInput.value.trim() === '') {
      showError(messageInput, messageError, 'Please enter a message.');
      valid = false;
    } else {
      clearError(messageInput, messageError);
    }

    if (valid) {
      successMsg.textContent = 'Thank you! Your message has been prepared successfully.';
      successMsg.classList.add('visible');
      form.reset();
    }
  });
});
