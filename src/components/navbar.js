import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full backdrop-filter backdrop-blur-lg backdrop-brightness-50 text-white flex items-center justify-between px-8 py-3 z-50">
        <div className="flex items-center">
          <img src="/logonew.png" alt="Forztek Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/products" className="hover:text-gray-400">
              Products
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-400">
              Engineering Services
            </a>
          </li>
          <li>
            <a href="/training" className="hover:text-gray-400">
              Training Solutions
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Dropdown */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            className="text-white p-2 hover:bg-white/10 rounded-md"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5">
              <div className="py-2">
                <a
                  href="/products"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Products
                </a>
                <a
                  href="/services"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Engineering Services
                </a>
                <a
                  href="/training"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Training Solutions
                </a>
                <a
                  href="/about"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;