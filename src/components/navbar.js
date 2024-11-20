import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full backdrop-filter backdrop-blur-lg text-white flex items-center justify-between px-8 py-3 z-50">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Forztek Logo" className="h-10 w-auto" />
        </div>

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

        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <a
                href="#products"
                className="text-2xl"
                onClick={toggleMobileMenu}
              >
                Products
              </a>
              <a
                href="#services"
                className="text-2xl"
                onClick={toggleMobileMenu}
              >
                Engineering Services
              </a>
              <a
                href="#training"
                className="text-2xl"
                onClick={toggleMobileMenu}
              >
                Training Solutions
              </a>
              <a href="#about" className="text-2xl" onClick={toggleMobileMenu}>
                About Us
              </a>
              <button
                className="text-white text-3xl absolute top-8 right-8"
                onClick={toggleMobileMenu}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
