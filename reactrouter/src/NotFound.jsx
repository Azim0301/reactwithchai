import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-orange-700">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
