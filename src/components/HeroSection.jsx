import React from "react";
import "../App.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to My Bookstore</h1>
        <p>Discover a world of knowledge and stories.</p>
        <button className="cta-btn" onClick={() => document.getElementById("featured").scrollIntoView({ behavior: "smooth" })}>
          Browse Featured Books
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
