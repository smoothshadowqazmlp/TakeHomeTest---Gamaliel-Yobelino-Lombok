// src/components/Checkout/CheckoutPage.tsx
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getCart, updateCart } from "../../../services/chartService";
import { Drug } from "../../home/drugCard";

export interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity?: number;
}

const CheckoutPage: React.FC = () => {
  const [cart, setCart] = useState<Drug[]>([]);
  const [fullName, setFullName] = useState<string>("");
  const [shippingAddress, setShippingAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card");
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const storedCart = getCart();
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cart: Drug[]) => {
    const totalCost = cart.reduce(
      (sum, drug) => sum + drug.price * (drug.quantity || 1),
      0
    );
    setTotal(totalCost);
  };

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleShippingAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShippingAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simulate placing an order
    const order = {
      fullName,
      shippingAddress,
      paymentMethod,
      items: cart,
      total,
    };

    console.log("Order placed:", order);

    // Clear cart after placing order
    updateCart([]);

    // Redirect to a thank you page or confirmation page (optional)
    alert("Order placed successfully!");
  };
  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div>
          <label>Shipping Address</label>
          <input
            type="text"
            value={shippingAddress}
            onChange={handleShippingAddressChange}
            required
          />
        </div>
        <div>
          <label>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div>
          <p>Total Cost: ${total.toFixed(2)}</p>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
