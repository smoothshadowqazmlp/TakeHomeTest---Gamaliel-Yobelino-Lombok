// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginForm";
import RegisterPage from "./pages/auth/RegisterForm";
import HomePage from "./pages/home/homePage";
import DrugDetailPage from "./pages/drug/drugDetailPage";
import CartPage from "./pages/chart/chartPage";
import CheckoutPage from "./pages/checkout/checkoutPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/drugs/:id" element={<DrugDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
