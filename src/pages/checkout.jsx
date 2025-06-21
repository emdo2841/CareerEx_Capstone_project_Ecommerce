// src/components/Checkout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import this
import { useCart } from "../context/CartContext";
import api from "../context/api"; // Adjust the import path as necessary

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate(); // ✅ Initialize it
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-[90%] sm:w-[70%] md:w-[400px] p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">Checkout</h2>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="text"
            placeholder="Delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            onClick={() => navigate("/verify")}
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-medium ${
              loading
                ? "bg-teal-300 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
          <p className="text-sm text-gray-500 text-center">
            You’ll be redirected to Paystack to complete the payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
