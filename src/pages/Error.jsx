import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message = "Page not found", status = 404 }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
      <h1 className="text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
        {status}
      </h1>

      <h2 className="text-3xl font-mono font-bold text-red-600 mb-2">
        {message}
      </h2>

      <p className="text-gray-600 font-mono max-w-xl mb-6">
        Sorry, the page you're looking for doesn't exist or an unexpected error
        occurred.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 font-bold text-xl font-mono bg-black text-[#796706] rounded-md hover:bg-gray-900 transition-colors cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
