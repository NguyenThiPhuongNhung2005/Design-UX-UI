(() => {
  const $ = (sel) => document.querySelector(sel);

  const id = new URLSearchParams(window.location.search).get('id') || '';
  const product = window.PetCareShop?.getProductById(id);

  const setText = (sel, value) => {
    const el = $(sel);
    if (el) el.textContent = value;
  };

  const setHTML = (sel, html) => {
    const el = $(sel);
    if (el) el.innerHTML = html;
  };

  const pill = (text, icon) =>
    `<span class="pill"><i class="bi ${icon}"></i> ${text}</span>`;

  const productImage = (p) => p.image || `assets/img/products/${p.category || 'default'}.svg`;

  const petLabel = (code) => {
    const map = {
      dog: 'Chó',
      cat: 'Mèo',
      hamster: 'Hamster',
      rabbit: 'Thỏ',
      bird: 'Chim',
      fish: 'Cá',
      smallpets: 'Thú nhỏ',
      otter: 'Rái cá',
      exotic: 'Thú cưng đặc biệt',
    };
    return map[code] || code;
  };

  const petIcon = (code) => {
    const map = {
      dog: 'bi-heart',
      cat: 'bi-heart',
      hamster: 'bi-heart',
      rabbit: 'bi-heart',
      bird: 'bi-heart',
      fish: 'bi-heart',
      smallpets: 'bi-stars',
      otter: 'bi-stars',
      exotic: 'bi-stars',
    };
    return map[code] || 'bi-heart';
  };

  if (!product) {
    setText('#pName', 'Không tìm thấy dịch vụ');
    setText('#pShort', 'Vui lòng quay lại trang Dịch vụ để chọn lại.');
    setHTML('#pMeta', `<a class="btn btn-primary" href="services.html"><i class="bi bi-grid"></i> Về trang Dịch vụ</a>`);
    const addBtn = $('#addBtn');
    if (addBtn) addBtn.setAttribute('disabled', 'disabled');
    return;
  }

  document.title = `${product.name} — PetCare T`;

  setText('#pName', product.name);
  setText('#pShort', product.short);

  const heroPanel = document.querySelector('.page-hero-panel');
  if (heroPanel) {
    const img = productImage(product);
    heroPanel.style.backgroundImage = `radial-gradient(520px 240px at 30% 25%, rgba(255,255,255,.5), transparent 55%), linear-gradient(135deg, rgba(236, 72, 153, .42), rgba(168, 85, 247, .34)), url('${img}')`;
    heroPanel.style.backgroundSize = 'cover';
    heroPanel.style.backgroundPosition = 'center';
  }

  const catLabel = window.PETCARE_CATEGORY_LABELS?.[product.category] || product.category;
  setText('#pCategory', catLabel);
  setText('#pDetails', product.details);

  const meta = [];
  if (product.duration) meta.push(pill(product.duration, 'bi-clock'));
  meta.push(pill(catLabel, 'bi-grid'));

  const pets = Array.isArray(product.pets) ? product.pets : [];
  if (pets.length) {
    const unique = Array.from(new Set(pets));
    const display = unique.slice(0, 3);
    meta.push(pill('Phù hợp', 'bi-patch-check'));
    display.forEach((p) => meta.push(pill(petLabel(p), petIcon(p))));
    if (unique.length > display.length) meta.push(pill(`+${unique.length - display.length}`, 'bi-plus'));
  }

  setHTML('#pMeta', meta.join(''));

  const money = window.PetCareShop.formatVND;
  setText('#pPrice', money(product.price));
  const compareEl = $('#pCompare');
  if (compareEl) {
    if (product.compareAt && product.compareAt > product.price) {
      compareEl.textContent = money(product.compareAt);
      compareEl.classList.remove('d-none');
    } else {
      compareEl.textContent = '';
      compareEl.classList.add('d-none');
    }
  }

  const durEl = $('#pDuration');
  if (durEl) durEl.textContent = product.duration ? `Thời lượng: ${product.duration}` : '';

  const includes = Array.isArray(product.includes) ? product.includes : [];
  setHTML('#pIncludes', includes.map((x) => `<li>${x}</li>`).join(''));

  const notes = Array.isArray(product.notes) ? product.notes : [];
  const notesWrap = $('#pNotesWrap');
  if (!notes.length) {
    notesWrap?.classList.add('d-none');
  } else {
    setHTML('#pNotes', notes.map((n) => `<div>• ${n}</div>`).join(''));
  }

  // Add to cart
  const addBtn = $('#addBtn');
  const buyNowBtn = $('#buyNowBtn');
  const qtyEl = $('#qty');
  const ok = $('#addOk');

  addBtn?.addEventListener('click', () => {
    const qty = Math.max(1, Math.min(99, Number(qtyEl?.value) || 1));
    const result = window.PetCareShop.addToCart(product.id, qty);
    if (result.ok) {
      ok?.classList.remove('d-none');
      setTimeout(() => ok?.classList.add('d-none'), 1200);
    }
  });

  buyNowBtn?.addEventListener('click', () => {
    const qty = Math.max(1, Math.min(99, Number(qtyEl?.value) || 1));
    const result = window.PetCareShop.addToCart(product.id, qty);
    if (result.ok) window.location.href = 'checkout.html';
  });

  // Related
  const related = window.PetCareShop
    .getProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const relatedGrid = $('#relatedGrid');
  if (relatedGrid) {
    relatedGrid.innerHTML = related
      .map((p) => {
        const compare = p.compareAt && p.compareAt > p.price ? `<span class="compare-tag">${money(p.compareAt)}</span>` : '';
        const img = productImage(p);
        return `
          <div class="col-md-6 col-lg-4">
            <div class="card card-soft h-100">
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
                <div class="price-row mt-3">
                  <span class="price-tag">${money(p.price)}</span>
                  ${compare}
                </div>
                <div class="d-grid gap-2 mt-3">
                  <a class="btn btn-outline-primary" href="product.html?id=${encodeURIComponent(p.id)}"><i class="bi bi-eye"></i> Xem chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }
})();
