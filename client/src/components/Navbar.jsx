import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi"; // Importing search icon

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white p-4 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section - Logo & Search Bar */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">LOGO</a>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>

          {/* Dropdown - Opens on Hover and Click */}
          <div 
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="hover:text-gray-400"
              onClick={() => setIsDropdownOpen(prev => !prev)}
            >
              Services ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white text-gray-800 mt-2 w-40 shadow-md rounded-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Web Dev</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">App Dev</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">SEO</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
