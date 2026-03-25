(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      const href = backToTop.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Bootstrap-style validation + demo submit success.
  const wireForm = (formId, successId) => {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      form.classList.add('was-validated');
      if (success) {
        success.classList.remove('d-none');
      }

      // Reset only after a short delay so the user sees the success.
      setTimeout(() => {
        form.reset();
        form.classList.remove('was-validated');
      }, 900);
    });
  };

  wireForm('bookingForm', 'bookingSuccess');
  wireForm('contactForm', 'contactSuccess');
})();
