// src/components/Home/DrugCard.tsx
import React from "react";

export interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface DrugCardProps {
  drug: Drug;
}

const DrugCard: React.FC<DrugCardProps> = ({ drug }) => {
  return (
    <div className="drug-card">
      <h3>{drug.name}</h3>
      <p>{drug.description}</p>
      <p>${drug.price.toFixed(2)}</p>
    </div>
  );
};

export default DrugCard;
