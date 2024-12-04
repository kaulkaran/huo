import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { book } = location.state || {}; // Retrieve the book info passed in state

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!book) {
      // Redirect to home page if no book is passed
      window.location.href = "/";
    }

    // Load Razorpay script asynchronously if not already loaded
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        console.log("Razorpay script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load Razorpay script");
      };
      document.body.appendChild(script);
    }
  }, [book]);

  const handlePayment = () => {
    if (window.Razorpay && book) {
      setLoading(true); // Show loading state while payment is being processed

      const options = {
        key: "rzp_test_pVZoyNIJWMSmxu", // Your Razorpay API key
        amount: book.price * 100, // Price of the selected book in paise (₹500 = 50000 paise)
        currency: "INR",
        name: "My Bookstore",
        description: book.description,
        image: "https://example.com/your-logo.png", // Your logo URL
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          // After payment success, redirect to the selected book's PDF
          window.location.href = book.pdfUrl; // Redirect to the selected book's PDF link
        },
        notes: {
          address: "Customer's address",
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      console.error("Razorpay SDK not loaded correctly or no book selected");
    }
  };

  const handleCancel = () => {
    window.location.href = "/"; // Navigate back to the homepage if user cancels
  };

  if (!book) {
    return <p>No book selected. Please go back to the homepage.</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Checkout</h2>
      <h3>You selected: {book.name}</h3>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>

      <button
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
        disabled={loading} // Disable the button while loading
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>

      <button
        onClick={handleCancel}
        style={{
          padding: "10px 20px",
          backgroundColor: "#FF5733",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default Checkout;
