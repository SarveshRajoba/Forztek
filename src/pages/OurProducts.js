import React from "react";
import Flashcard from "../components/Flashcard";
import logo from "../assets/our_product.png";
const OurProducts = () => {
  return (
    <div className=" bg-forztek-blue h-screen flex items-center justify-between px-10">
      <div>
        <div class="text-3xl md:text-4xl lg:text-6xl font-bold text-white mt-20 text-left ml-28">
          <span class="block">Our</span>
          <span class="block">Products</span>
        </div>
        <img src={logo} className="mx-auto" />
      </div>

      <div className="mr-28">
        <Flashcard />
      </div>
    </div>
  );
};

export default OurProducts;
