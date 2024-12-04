import React from "react";

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "Featured Book 1",
      description: "A great book to start with.",
      image: "https://via.placeholder.com/200?text=Featured+Book+1", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Featured Book 2",
      description: "An inspiring tale.",
      image: "https://via.placeholder.com/200?text=Featured+Book+2", // Replace with actual image URL
    },
  ];

  const sectionStyle = {
    padding: "40px 20px",
    backgroundColor: "#fdf6ec",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "200px",
    padding: "15px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "18px",
    color: "#333",
    margin: "10px 0",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#555",
  };

  return (
    <section id="featured" style={sectionStyle}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Featured Books</h2>
      <div style={containerStyle}>
        {featuredBooks.map((book) => (
          <div
            key={book.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img src={book.image} alt={book.title} style={imageStyle} />
            <h3 style={titleStyle}>{book.title}</h3>
            <p style={descriptionStyle}>{book.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
