 

import React from "react";

const ProductCard = ({ img, title, description = "" }) => {
  return (
    <div className="relative w-[409px] h-[238px] bg-white rounded-md group overflow-hidden shadow-lg">
      <div className="flex">
        <img
          className="w-[50%] mt-12 transition-all duration-300"
          src={img}
          alt={title}
        />
        <div className="flex flex-col">
          <div className="font-bold text-black text-[34.4px] mr-14">
            {title}
          </div>
          {/* <div className="text-gray-400 w-max ml-[170px]">View</div> */}
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-[#D9D9D9] overflow-hidden h-0 group-hover:h-full transition-all duration-500">
        <div className="font-bold text-black text-[34.4px] mx-auto">{title}</div>
        <div className="text-black text-xl  text-center mt-12">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
