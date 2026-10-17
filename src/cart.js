function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, item, quantity) {
  if (quantity <= 0 || item.stock < quantity) throw new RangeError();

  if (cart.length === 0 || !cart.some(el => el.id === item.id)) {
    cart.push({ ...item, quantity })
  } else {
    cart.find(el => el.id === item.id).quantity += quantity;
  }

  return cart;
}

function changeQuantity(cart, id, quantity) {
  if (!cart.some(el => el.id === id)) return cart;

  if (quantity <= 0 || cart.find(el => el.id === id).stock < quantity) throw new RangeError();

  cart.find(el => el.id === id).quantity = quantity;

  return cart;
}

function removeFromCart(cart, id) {
  cart = cart.filter(el => el.id !== id);

  return cart;
}

function calculateCartSubtotal(cart) {
  return cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
}

function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
