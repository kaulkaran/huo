import React from "react";


const AvailableBooks = ({ onSelectBook }) => {


  const availableBooks = [
    {
      id: 1,
      title: "Available Book 1",
      price: "500",
      image: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1733295721/image/pwxdtqbz4jetgnvghtby.png", // Replace with actual image URL
      description: "This is a description of Book 1",
      pdfUrl: "https://drive.google.com/uc?export=download&id=1SfO2WgHUxeGEkIUuYuJBcSdt3foZo1b8", // Link to PDF
    },
    {
      id: 2,
      title: "Available Book 2",
      price: "300",
      image: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1733295721/image/pwxdtqbz4jetgnvghtby.png", // Replace with actual image URL
      description: "This is a description of Book 1",
      pdfUrl: "https://drive.google.com/uc?export=download&id=1SfO2WgHUxeGEkIUuYuJBcSdt3foZo1b8", // Link to PDF
    },
    {
      id: 3,
      title: "Available Book 3",
      price: "450",
      image: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1733295721/image/pwxdtqbz4jetgnvghtby.png", // Replace with actual image URL
      description: "This is a description of Book 1",
      pdfUrl: "https://drive.google.com/uc?export=download&id=1SfO2WgHUxeGEkIUuYuJBcSdt3foZo1b8", // Link to PDF
    },
  ];
  

  // Inline CSS styles
  const sectionStyle = {
    padding: "40px 20px",
    backgroundColor: "#f4f4f9",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
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

  const titleStyle = {
    fontSize: "18px",
    color: "#333",
    margin: "10px 0",
  };

  const priceStyle = {
    fontSize: "16px",
    color: "#555",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  return (
    <section id="available" style={sectionStyle}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Available Books</h2>
      <div style={containerStyle}>
        {availableBooks.map((book) => (
          <div
            key={book.id}
            style={cardStyle}
            onClick={() => onSelectBook(book)}
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
            <img
              src={book.image}
              alt={book.title}
              style={imageStyle}
            />
            <h3 style={titleStyle}>{book.title}</h3>
            <p style={priceStyle}>
              <strong>Price:</strong> ₹{book.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableBooks;
