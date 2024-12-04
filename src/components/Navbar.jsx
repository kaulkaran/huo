import React from "react";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <h1 style={brandStyle}>QualtBooks</h1>

        {/* Navigation Links */}
        <ul style={navLinksStyle}>
          <li style={navLinkStyle}>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li style={navLinkStyle}>
            <a href="#featured" style={linkStyle}>
              Featured
            </a>
          </li>
          <li style={navLinkStyle}>
            <a href="#available" style={linkStyle}>
              Books
            </a>
          </li>
          <li style={navLinkStyle}>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%",
  boxSizing: "border-box", // Ensure padding doesn't push content out of the container
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap", // Ensures the content wraps on smaller screens
  width: "100%",
  boxSizing: "border-box",
};

const brandStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
};

const navLinksStyle = {
  display: "flex",
  gap: "20px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  flexWrap: "wrap", // Make the links wrap to the next line if necessary
  overflow: "hidden", // Prevent overflowing
};

const navLinkStyle = {
  color: "#fff",
  whiteSpace: "nowrap", // Ensure the text doesn't wrap within a link
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  display: "block", // Ensure the anchor tag takes up the full width of its container in mobile
};

// Media Query for Responsiveness
const responsiveStyles = `
  @media (max-width: 768px) {
    .nav-links {
      flex-direction: column;
      gap: 10px;
      text-align: center;
      width: 100%;  // Ensure links are contained within the screen
    }
    .nav-links li {
      font-size: 14px;
    }
  }
`;

export default Navbar;
