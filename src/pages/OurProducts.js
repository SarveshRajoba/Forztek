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

const OurProducts = () => {
  return (
    <div className="bg-forztek-blue h-screen flex items-center justify-between px-10">
      <div>
        <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mt-20 text-left ml-10">
          <span className="block">Our</span>
          <span className="block">Products</span>
        </div>
        <img src={"/our_product.png"} alt="ourproducts" className="mx-auto" />
      </div>
      <div className="relative mr-28 overflow-hidden hover:overflow-y-auto h-[80vh] custom-scrollbar">
        <div className="grid grid-cols-2 gap-6">
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
