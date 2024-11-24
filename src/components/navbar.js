import React, { useState, useRef, useEffect } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

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
      <nav className="fixed top-0 left-0 right-0 w-full backdrop-filter backdrop-blur-lg backdrop-brightness-50 text-white flex items-center justify-between px-8 py-3 z-50 max-w-screen">
        <div className="flex flex-col items-center align-middle justify-center">
          <HashLink to="/#home">
            <img src="/logo 3.png" alt="Forztek Logo" className="h-8 w-auto" />
            <div className="font-bold h-5 text-blue-300">FORZTEK</div>
          </HashLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <HashLink
              to="/#home"
              className="relative pb-1 hover:text-inherit after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#about"
              className="relative pb-1 hover:text-inherit after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#products"
              className="relative pb-1 hover:text-inherit after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Products
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#training"
              className="relative pb-1 hover:text-inherit after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Training Solutions
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              className="relative pb-1 hover:text-inherit after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Contact
            </HashLink>
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
                <HashLink
                  to="/#products"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Products
                </HashLink>
                <HashLink
                  to="/#about"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  About Us
                </HashLink>
                <HashLink
                  to="/#training"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Training Solutions
                </HashLink>
                <HashLink
                  to="/#contact"
                  className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Contact
                </HashLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
