// src/components/Home/HomePage.tsx
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DrugCard from "../drugCard/index";
import SearchBar from "../../../components/searchBar/searchBar";

export interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const API_URL = "http://localhost:5000/drugs"; // Ganti dengan URL API Anda

const HomePage: React.FC = () => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await axios.get<Drug[]>(API_URL);
        setDrugs(response.data);
      } catch (error) {
        console.error("Error fetching drugs:", error);
      }
    };

    fetchDrugs();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Drug Catalog</h1>
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <div className="drug-list">
        {filteredDrugs.map((drug) => (
          <Link to={`/drugs/${drug.id}`} key={drug.id}>
            <DrugCard drug={drug} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
