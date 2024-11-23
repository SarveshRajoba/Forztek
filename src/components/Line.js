import React from "react";

const AnimatedHeading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="group text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800">
          Hover Over Me
        </h2>

        {/* Animated Line */}
        <div className="relative mt-2 w-24 h-1  mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-forztek-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeading;
