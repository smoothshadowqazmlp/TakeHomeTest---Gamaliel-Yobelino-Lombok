// src/components/Cart/CartPage.tsx
import React, { useEffect, useState } from "react";
import { updateCart } from "../../../services/chartService";
import CartItem from "../chartItems";
import { Link } from "react-router-dom";

export interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}
const CART_KEY = "cart";

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Drug[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem(CART_KEY) || "[]"
    ) as Drug[];
    setCart(storedCart);
  }, []);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const updatedCart = cart.map((drug) =>
      drug.id === id ? { ...drug, quantity } : drug
    );
    setCart(updatedCart.filter((drug) => drug.quantity > 0));
    updateCart(updatedCart.filter((drug) => drug.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, drug) => total + drug.price * drug.quantity, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((drug) => (
              <CartItem
                key={drug.id}
                drug={drug}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Cost: ${calculateTotal().toFixed(2)}</p>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
