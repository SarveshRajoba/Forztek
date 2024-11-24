// import React from "react";
// import ProductCard from "../components/ProductCard";
// import productData from "../data/Products_list"; // Import the product data

// const OurProducts = () => {
//   return (
//     <div className="bg-forztek-blue h-screen flex items-center justify-between px-10">
//       <div>
//         <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mt-20 text-left ml-28">
//           <span className="block">Our</span>
//           <span className="block">Products</span>
//         </div>
//         <img src={"/our_product.png"} alt="ourproducts" className="mx-auto" />
//       </div>
//       <div className="relative mr-28 overflow-hidden hover:overflow-y-auto h-[70vh]">
//         <div className="grid grid-cols-2 gap-6">
//           {productData.map((product, index) => (
//             <ProductCard
//               key={index}
//               img={product.image}
//               title={product.product_name}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProducts;
import React from "react";
import ProductCard from "../components/ProductCard";
import productData from "../data/Products_list"; // Import the product data
// import '../App.css';
import Line from "../components/Line";

const OurProducts = () => {
  return (
    <div id="products" className="bg-forztek-blue min-h-screen items-center justify-between px-10 flex">
      <div>
        <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-left ml-10 group ">
          <span className="text-3xl  ">Our Products</span>
          <Line/>
        </div>
      </div>
      <div className="relative overflow-hidden hover:overflow-y-auto h-[80vh] custom-scrollbar mt-10 w-max mx-auto">
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
