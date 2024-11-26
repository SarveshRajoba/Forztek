import React from "react";
import ProductCard from "../components/ProductCard";
import productData from "../data/Products_list"; // Import the product data
// import '../App.css';
import Line from "../components/Line";

const OurProducts = () => {
  return (
    <div id="products" className="bg-forztek-blue min-h-screen items-center justify-between px-10 md:flex">
      <div>
        <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-left ml-10 group ">
          <span className="text-3xl  sm:mt-10 ">Our Products</span>
          <Line />
        </div>
      </div>
      <div className="relative  hover:overflow-y-auto h-[520px] custom-scrollbar mt-10 w-max mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-1">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              img={product.image}
              title={product.product_name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;