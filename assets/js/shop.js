(() => {
  const CART_KEY = 'petcare_cart_v1';

  const formatVND = (value) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

  const getProducts = () => Array.isArray(window.PETCARE_PRODUCTS) ? window.PETCARE_PRODUCTS : [];

  const getProductById = (id) => getProducts().find((p) => p.id === id) || null;

  const getCart = () => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const setCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadges();
  };

  const getCartCount = () => getCart().reduce((sum, item) => sum + (Number(item.qty) || 0), 0);

  const addToCart = (id, qty = 1) => {
    const product = getProductById(id);
    if (!product) return { ok: false, message: 'Không tìm thấy sản phẩm.' };

    const safeQty = Math.max(1, Math.min(99, Number(qty) || 1));
    const cart = getCart();
    const existing = cart.find((i) => i.id === id);

    if (existing) {
      existing.qty = Math.max(1, Math.min(99, (Number(existing.qty) || 1) + safeQty));
    } else {
      cart.push({ id, qty: safeQty });
    }

    setCart(cart);
    return { ok: true };
  };

  const updateQty = (id, qty) => {
    const safeQty = Math.max(1, Math.min(99, Number(qty) || 1));
    const cart = getCart();
    const existing = cart.find((i) => i.id === id);
    if (!existing) return;
    existing.qty = safeQty;
    setCart(cart);
  };

  const removeFromCart = (id) => {
    const next = getCart().filter((i) => i.id !== id);
    setCart(next);
  };

  const clearCart = () => setCart([]);

  const cartToLines = () => {
    const cart = getCart();
    const lines = [];
    for (const item of cart) {
      const product = getProductById(item.id);
      if (!product) continue;
      const qty = Number(item.qty) || 1;
      lines.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty,
        subtotal: product.price * qty,
        category: product.category,
      });
    }
    return lines;
  };

  const getTotals = () => {
    const lines = cartToLines();
    const subtotal = lines.reduce((sum, l) => sum + l.subtotal, 0);

    // Demo shipping fee rule
    const shipping = subtotal >= 400000 || subtotal === 0 ? 0 : 25000;
    const total = subtotal + shipping;
    return { lines, subtotal, shipping, total };
  };

  const updateCartBadges = () => {
    const count = getCartCount();
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(count);
      el.classList.toggle('d-none', count === 0);
    });
  };

  // expose API
  window.PetCareShop = {
    formatVND,
    getProducts,
    getProductById,
    getCart,
    setCart,
    getCartCount,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    cartToLines,
    getTotals,
    updateCartBadges,
  };

  // run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCartBadges);
  } else {
    updateCartBadges();
  }
})();
