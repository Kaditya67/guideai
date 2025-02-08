import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">Page Not Found</p>
      <Link to="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Go Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
