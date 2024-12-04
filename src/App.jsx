import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Checkout from "./components/Checkout";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const books = [
    {
      id: 1,
      name: "Book 1",
      price: 50000, // Price in paise (50000 = ₹500)
      description: "This is a description of Book 1",
      pdfUrl: "https://drive.google.com/uc?export=download&id=1SfO2WgHUxeGEkIUuYuJBcSdt3foZo1b8",
    },
    {
      id: 2,
      name: "Book 2",
      price: 60000, // Price in paise (60000 = ₹600)
      description: "This is a description of Book 2",
      pdfUrl: "https://drive.google.com/uc?export=download&id=1SfO2WgHUxeGEkIUuYuJBcSdt3foZo1b8",
    },
    // Add more books as needed
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onSelectProduct={setSelectedProduct} />} />
        <Route path="/checkout" element={<Checkout product={selectedProduct} books={books} />} />
      </Routes>
    </Router>
  );
};

export default App;
