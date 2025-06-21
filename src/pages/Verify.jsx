// src/components/CheckoutSuccess.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Optional: Install heroicons

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-black font-mono mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6 font-mono">
          Thank you for your purchase. Your order has been placed and is being
          processed.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-black text-[#796706] font-bold text-lg px-6 py-2 rounded-lg hover:opacity-90"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
