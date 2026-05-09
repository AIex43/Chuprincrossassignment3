let cart = [];
let listeners = [];


const notify = () => {
  listeners.forEach((l) => l(cart));
};


export const addToCart = (item) => {
  const existing = cart.find((p) => p.title === item.title);

  if (existing) {
    existing.count += 1;
  } else {
    cart.push({ ...item, count: 1 });
  }

  notify();
};


export const increaseCount = (title) => {
  cart = cart.map((item) =>
    item.title === title
      ? { ...item, count: item.count + 1 }
      : item
  );

  notify();
};


export const decreaseCount = (title) => {
  cart = cart
    .map((item) =>
      item.title === title
        ? { ...item, count: item.count - 1 }
        : item
    )
    .filter((item) => item.count > 0);

  notify();
};


export const clearCart = () => {
  cart = [];
  notify();
};


export const getCart = () => cart;


export const subscribe = (listener) => {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};