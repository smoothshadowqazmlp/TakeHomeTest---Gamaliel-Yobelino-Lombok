// src/components/DrugDetail/DrugDetailPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../../../services/chartService/index";

export interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}
const API_URL = "http://localhost:3000/drugs";

const DrugDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [drug, setDrug] = useState<Drug | null>(null);

  useEffect(() => {
    const fetchDrug = async () => {
      try {
        const response = await axios.get<Drug>(`${API_URL}/${id}`);
        setDrug(response.data);
      } catch (error) {
        console.error("Error fetching drug details:", error);
      }
    };

    fetchDrug();
  }, [id]);

  const handleAddToCart = () => {
    if (drug) {
      addToCart(drug);
      alert(`${drug.name} added to cart!`);
    }
  };

  if (!drug) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{drug.name}</h1>
      <p>{drug.description}</p>
      <p>Price: ${drug.price.toFixed(2)}</p>
      <p>Category: {drug.category}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div>
        <Link to="/">Back to Home</Link>
        <Link to="/cart" style={{ marginLeft: "10px" }}>
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default DrugDetailPage;
