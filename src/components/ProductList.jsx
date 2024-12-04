import React from "react";

const ProductList = ({ onSelectProduct }) => {
  const products = [
    {
      id: 1,
      name: "EBook 1",
      price: 500,
      image: "https://via.placeholder.com/150?text=EBook+1", // Placeholder image
    },
    {
      id: 2,
      name: "EBook 2",
      price: 600,
      image: "https://via.placeholder.com/150?text=EBook+2", // Placeholder image
    },
    {
      id: 3,
      name: "EBook 3",
      price: 400,
      image: "https://via.placeholder.com/150?text=EBook+3", // Placeholder image
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Available eBooks</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              maxWidth: "200px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button
              onClick={() => onSelectProduct(product)}
              style={{
                backgroundColor: "#F37254",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
