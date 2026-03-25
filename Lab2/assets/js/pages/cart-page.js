(() => {
  const shop = window.PetCareShop;
  if (!shop) return;

  const $ = (sel) => document.querySelector(sel);
  const emptyState = $('#emptyState');
  const tableWrap = $('#tableWrap');
  const body = $('#cartBody');

  const sumSubtotal = $('#sumSubtotal');
  const sumShipping = $('#sumShipping');
  const sumTotal = $('#sumTotal');

  const clearBtn = $('#clearBtn');

  const render = () => {
    const { lines, subtotal, shipping, total } = shop.getTotals();

    if (!lines.length) {
      emptyState?.classList.remove('d-none');
      tableWrap?.classList.add('d-none');
    } else {
      emptyState?.classList.add('d-none');
      tableWrap?.classList.remove('d-none');
    }

    if (body) {
      body.innerHTML = lines
        .map((l) => {
          const href = `product.html?id=${encodeURIComponent(l.id)}`;
          return `
            <tr>
              <td>
                <div class="fw-semibold"><a class="link-dark text-decoration-none" href="${href}">${l.name}</a></div>
                <div class="text-secondary small">${window.PETCARE_CATEGORY_LABELS?.[l.category] || l.category}</div>
              </td>
              <td class="text-nowrap">${shop.formatVND(l.price)}</td>
              <td>
                <input class="form-control form-control-sm" type="number" min="1" max="99" value="${l.qty}" data-qty="${l.id}" />
              </td>
              <td class="text-nowrap fw-semibold">${shop.formatVND(l.subtotal)}</td>
              <td class="text-end">
                <button class="btn btn-sm btn-outline-secondary" type="button" data-remove="${l.id}"><i class="bi bi-x"></i></button>
              </td>
            </tr>
          `;
        })
        .join('');
    }

    if (sumSubtotal) sumSubtotal.textContent = shop.formatVND(subtotal);
    if (sumShipping) sumShipping.textContent = shipping === 0 ? 'Miễn phí' : shop.formatVND(shipping);
    if (sumTotal) sumTotal.textContent = shop.formatVND(total);

    // listeners
    document.querySelectorAll('[data-qty]').forEach((input) => {
      input.addEventListener('change', () => {
        const id = input.getAttribute('data-qty');
        shop.updateQty(id, input.value);
        render();
      });
    });

    document.querySelectorAll('[data-remove]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove');
        shop.removeFromCart(id);
        render();
      });
    });
  };

  clearBtn?.addEventListener('click', () => {
    shop.clearCart();
    render();
  });

  render();
})();
