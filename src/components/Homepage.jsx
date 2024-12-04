import React from "react";
import Navbar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";
import FeaturedBooks from "./FeaturedBooks.jsx";
import AvailableBooks from "./AvailableBooks.jsx";
import Footer from "./Footer.jsx";

const Homepage = ({ onSelectBook }) => {
    const navigate = useNavigate();

  const handleSelectBook = (book) => {
    // Navigate to the checkout page and pass the book data through state
    navigate("/checkout", { state: { book } });
  };
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedBooks />
      <AvailableBooks onSelectBook={handleSelectBook} />
      <Footer />
    </div>
  );
};

export default Homepage;
