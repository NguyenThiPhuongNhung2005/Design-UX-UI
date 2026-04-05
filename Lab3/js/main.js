(() => {
  const toastEl = document.getElementById('actionToast');
  const toastBodyEl = document.getElementById('actionToastBody');
  const toast = toastEl ? new bootstrap.Toast(toastEl, { delay: 3500 }) : null;

  function showToast(message) {
    if (!toast || !toastBodyEl) return;
    toastBodyEl.textContent = message;
    toast.show();
  }

  // Prefill booking modal with trip title from any "Book/Select" button.
  const bookingModalEl = document.getElementById('bookingModal');
  const bookingTripEl = document.getElementById('bookingTrip');
  if (bookingModalEl && bookingTripEl) {
    bookingModalEl.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const tripTitle = trigger?.getAttribute?.('data-trip-title');
      if (tripTitle) bookingTripEl.value = tripTitle;
    });
  }

  // Hero search form (demo)
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destination = document.getElementById('searchDestination')?.value || 'danh mục';
      showToast(`Đang tìm: ${destination}…`);
    });
  }

  // Booking form (demo)
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const trip = bookingTripEl?.value?.trim() || 'yêu cầu của bạn';
      const guests = document.getElementById('bookingGuests')?.value || '1';
      showToast(`Đã gửi: ${trip} (SL ${guests})`);

      const modalInstance = bootstrap.Modal.getInstance(bookingModalEl);
      modalInstance?.hide();
    });
  }

  // Contact form validation + toast
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        showToast('Vui lòng nhập đủ các mục bắt buộc.');
        return;
      }

      const trip = document.getElementById('trip')?.value?.trim();
      showToast(trip ? `Đã gửi tin về: ${trip}` : 'Đã gửi tin.');
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }
})();
