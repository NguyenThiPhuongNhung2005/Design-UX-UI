(() => {
  const shop = window.PetCareShop;
  if (!shop) return;

  const money = shop.formatVND;
  const catLabels = window.PETCARE_CATEGORY_LABELS || {};

  const productImage = (p) => p.image || `assets/img/products/${p.category || 'default'}.svg`;

  const renderCategory = (container) => {
    const cat = container.getAttribute('data-category');
    const products = shop.getProducts().filter((p) => p.category === cat);

    if (!products.length) {
      container.innerHTML = `
        <div class="col-12">
          <div class="note">
            <i class="bi bi-info-circle"></i>
            <div>
              <div class="fw-semibold">Chưa có sản phẩm</div>
              <div class="text-secondary">Bạn có thể thêm trong assets/js/data.js.</div>
            </div>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = products
      .map((p) => {
        const compare = p.compareAt && p.compareAt > p.price ? `<span class="compare-tag">${money(p.compareAt)}</span>` : '';
        const catLabel = catLabels[p.category] || p.category;
        const img = productImage(p);
        return `
          <div class="col-md-6 col-lg-4">
            <div class="card card-soft h-100 product-card">
              <div class="card-body">
                <div class="product-thumb mb-3">
                  <img src="${img}" alt="${p.name}" loading="lazy" />
                </div>
                <div class="d-flex align-items-start justify-content-between gap-2">
                  <div>
                    <div class="fw-semibold">${p.name}</div>
                    <div class="text-secondary small mt-1">${p.short}</div>
                  </div>
                  <span class="pill"><i class="bi bi-clock"></i> ${p.duration || ''}</span>
                </div>

                <div class="d-flex flex-wrap gap-2 mt-3">
                  <span class="pill"><i class="bi bi-grid"></i> ${catLabel}</span>
                  <span class="pill"><i class="bi bi-shield-check"></i> An toàn</span>
                </div>

                <div class="price-row mt-3">
                  <span class="price-tag">${money(p.price)}</span>
                  ${compare}
                </div>

                <div class="product-cta d-grid gap-2">
                  <a class="btn btn-primary" href="product.html?id=${encodeURIComponent(p.id)}"><span class="btn-icon"><i class="bi bi-eye"></i></span><span>Xem chi tiết</span></a>
                  <button class="btn btn-outline-secondary" type="button" data-add="${p.id}"><span class="btn-icon"><i class="bi bi-bag-plus"></i></span><span>Thêm vào giỏ</span></button>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    container.querySelectorAll('[data-add]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-add');
        shop.addToCart(id, 1);

        // tiny feedback
        const old = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check2"></i> Đã thêm';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = old;
          btn.disabled = false;
        }, 900);
      });
    });
  };

  document.querySelectorAll('[data-product-grid]').forEach((grid) => renderCategory(grid));
})();
