import "./index.css";

import React from "react";
import { useState } from "react";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-transparent text-white flex items-center justify-between px-8 py-4 z-50">
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

      <section
        className="h-screen bg-cover bg-center flex items-center justify-between text-white text-center relative px-6 sm:px-8 md:px-12 lg:px-16"
        style={{ backgroundImage: "url('/h3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold animate-fade-in">
            Forztek
          </h1>
          <div className="flex flex-col items-start">
            <div className="h-1 w-12 bg-blue-500 mt-3 sm:mt-4"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 animate-slide-in">
              Engineering
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-1 sm:mt-2 animate-slide-in">
              Excellence Redefined
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
