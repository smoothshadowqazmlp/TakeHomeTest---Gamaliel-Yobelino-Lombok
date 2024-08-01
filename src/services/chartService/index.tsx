export interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}
const CART_KEY = "cart";

export const addToCart = (drug: Drug) => {
  const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]") as Drug[];
  cart.push(drug);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const getCart = (): Drug[] => {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]") as Drug[];
};

export const updateCart = (cart: Drug[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const removeFromCart = (drugId: string) => {
  const cart = getCart();
  const updatedCart = cart.filter((drug) => drug.id !== drugId);
  updateCart(updatedCart);
};
