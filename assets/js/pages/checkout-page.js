(() => {
  const shop = window.PetCareShop;
  if (!shop) return;

  const $ = (sel) => document.querySelector(sel);

  const orderLines = $('#orderLines');
  const sumSubtotal = $('#sumSubtotal');
  const sumShipping = $('#sumShipping');
  const sumTotal = $('#sumTotal');
  const emptyState = $('#emptyState');
  const goShopWrap = $('#goShopWrap');

  const form = $('#checkoutForm');
  const ok = $('#checkoutOk');

  const render = () => {
    const { lines, subtotal, shipping, total } = shop.getTotals();

    if (orderLines) {
      orderLines.innerHTML = lines
        .map((l) => {
          return `
            <div class="order-line">
              <div>
                <div class="fw-semibold">${l.name}</div>
                <div class="text-secondary small">${l.qty} × ${shop.formatVND(l.price)}</div>
              </div>
              <div class="fw-bold">${shop.formatVND(l.subtotal)}</div>
            </div>
          `;
        })
        .join('');
    }

    if (sumSubtotal) sumSubtotal.textContent = shop.formatVND(subtotal);
    if (sumShipping) sumShipping.textContent = shipping === 0 ? 'Miễn phí' : shop.formatVND(shipping);
    if (sumTotal) sumTotal.textContent = shop.formatVND(total);

    const isEmpty = lines.length === 0;
    emptyState?.classList.toggle('d-none', !isEmpty);
    goShopWrap?.classList.toggle('d-none', !isEmpty);
  };

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    form.classList.add('was-validated');
    ok?.classList.remove('d-none');

    // Demo: clear cart on success
    shop.clearCart();
    render();

    setTimeout(() => {
      ok?.classList.add('d-none');
    }, 2200);
  });

  render();
})();
