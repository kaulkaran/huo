import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">My Bookstore</h1>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="#featured">Featured</a></li>
          <li><a href="#available">Books</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
