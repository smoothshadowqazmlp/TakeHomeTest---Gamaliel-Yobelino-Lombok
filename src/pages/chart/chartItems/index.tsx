import React, { useState } from "react";
import { removeFromCart } from "../../../services/chartService/index";

export interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface CartItemProps {
  drug: Drug;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ drug, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    onUpdateQuantity(drug.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(drug.id);
    onUpdateQuantity(drug.id, 0);
  };

  return (
    <div className="cart-item">
      <h3>{drug.name}</h3>
      <p>{drug.description}</p>
      <p>Price: ${drug.price.toFixed(2)}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
