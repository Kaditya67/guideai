import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">LOGO</a>
        <div className="hidden md:flex space-x-4 ">
          <a href="#" className="hover:font-bold transition-all">Home</a>
          <a href="#" className="hover:font-bold transition-all">About</a>
          <a href="#" className="hover:font-bold transition-all">Dashboard</a>
          <div className="relative">
            <button
              className="hover:font-bold transition-all"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white text-gray-800 mt-2 w-40 shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Web Development
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  App Development
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  SEO Optimization
                </a>
              </div>
            )}
          </div>
          <a href="#" className="hover:font-bold transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
