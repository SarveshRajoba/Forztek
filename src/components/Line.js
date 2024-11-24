import React from "react";

const Line = () => {
  return (
    <div className="relative mt-2 w-24 h-1 overflow-hidden group">
      <div className="absolute top-0 left-0 h-full w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></div>
    </div>
  );
};

export default Line;
