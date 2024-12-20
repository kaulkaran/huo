import React from "react";

const AvailableBooks = ({ onSelectBook }) => {
  const availableBooks = [
    {
      id: 1,
      title: "Hide and Seek",
      price: "250",
      image: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1733319380/image/avadhiyhvt3lbvohjkhh.jpg", // Replace with actual image URL
      description: "How does your night go from a game of Hide and Seek ",
      pdfUrl: "https://drive.google.com/uc?export=download&id=10mgWOxQihGKf4_y2eEnpl4fq3EJfDGia", // Link to PDF
    },
    {
      id: 2,
      title: "Hide and Seek 2",
      price: "350",
      image: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1733320196/image/xldbd7go3ckokpejymla.jpg", // Replace with actual image URL
      description: "My name is Emily. Two years ago I lost everything. I thought I could start a new life. ",
      pdfUrl: "https://drive.google.com/uc?export=download&id=1-6tQjXtw80FbnNoQ1fDQViWvByhGPuRk", // Link to PDF
    },
    {
      id: 3,
      title: "Hide and Seek 3",
      price: "450",
      image: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1733322615/image/vriv4cq2ovtuohgwueht.png", // Replace with actual image URL
      description: "Tori and her friends use an ouija board at the ruins of Mr. Harmon's old mansion. ",
      pdfUrl: "https://drive.google.com/uc?export=download&id=16-cbF7B1Q4ZLv7NyZTYSxN-mAJ-5ULRt", // Link to PDF
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
    flexDirection: "row", // Default to row
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "200px", // Smaller card width
    padding: "15px", // Reduced padding
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
    height: "225px", // Reduced image height
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "8px",
  };

  // Responsive CSS for mobile view
  const responsiveStyles = `
    @media (max-width: 768px) {
      .container {
        gap: 15px; 
      }

      .card {
        width: 150px; /* Smaller card width for mobile */
        padding: 10px; /* Reduced padding */
      }

      .card img {
        height: 120px; /* Smaller image height */
      }

      .card h3 {
        font-size: 14px;
      }

      .card p {
        font-size: 12px;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
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
    </>
  );
};

export default AvailableBooks;
