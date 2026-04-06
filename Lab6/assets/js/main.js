(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Menu page: simple search filter (by card dataset)
  const menuSearch = document.getElementById('menuSearch');
  const menuGrid = document.getElementById('menuGrid');
  if (menuSearch && menuGrid) {
    const normalize = (value) => (value || '').toString().trim().toLowerCase();

    const filter = () => {
      const q = normalize(menuSearch.value);
      const items = menuGrid.querySelectorAll('[data-name]');
      items.forEach((item) => {
        const name = normalize(item.getAttribute('data-name'));
        const isMatch = !q || name.includes(q);
        item.classList.toggle('d-none', !isMatch);
      });
    };

    menuSearch.addEventListener('input', filter);
  }

  // Menu page: populate modal content
  const dishModalEl = document.getElementById('dishModal');
  if (dishModalEl) {
    dishModalEl.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      if (!trigger) return;

      const title = trigger.getAttribute('data-dish-title') || '—';
      const price = trigger.getAttribute('data-dish-price') || '—';
      const desc = trigger.getAttribute('data-dish-desc') || '—';
      const img = trigger.getAttribute('data-dish-img') || 'https://placehold.co/1000x650';

      const titleEl = document.getElementById('dishModalTitle');
      const priceEl = document.getElementById('dishModalPrice');
      const descEl = document.getElementById('dishModalDesc');
      const imgEl = document.getElementById('dishModalImg');

      if (titleEl) titleEl.textContent = title;
      if (priceEl) priceEl.textContent = price;
      if (descEl) descEl.textContent = desc;
      if (imgEl) {
        imgEl.src = img;
        imgEl.alt = title;
      }
    });
  }

  // Contact page: bootstrap validation + demo submit
  const orderForm = document.getElementById('orderForm');
  const formAlert = document.getElementById('formAlert');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      orderForm.classList.add('was-validated');
      if (!orderForm.checkValidity()) return;

      const fullName = (document.getElementById('fullName')?.value || '').trim();
      const phone = (document.getElementById('phone')?.value || '').trim();

      if (formAlert) {
        formAlert.textContent = `Đã gửi yêu cầu (demo). Cảm ơn ${fullName}! Chúng tôi sẽ liên hệ qua ${phone}.`;
        formAlert.classList.remove('d-none');
      }

      orderForm.reset();
      orderForm.classList.remove('was-validated');
    });
  }
})();
