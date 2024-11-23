 

import React from "react";

const ProductCard = ({ img, title, description = "" }) => {
  return (
    <div className="relative w-[350px] h-[238px] bg-[#181637] rounded-md group overflow-hidden shadow-lg shadow-black">
      <div className="flex justify-between items-center">
      
        <div className="flex flex-col">
          <div className=" text-white justify-start text-left text-[34.4px] ml-2 mb-[100px]">
            {title}
          </div>
          
        </div>
        <img
          className="w-[50%]  mt-[70px] mr-0 transition-all duration-300 "
          src={img}
          alt={title}
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-[#181637] overflow-hidden h-0 group-hover:h-full transition-all duration-500  ">
      <div className=" text-white justify-start text-left text-[34.4px] ml-2 mt-10">
            {title}
          </div>
        <div className="text-white text-xl text-left w-[250px] mt-2 ml-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
