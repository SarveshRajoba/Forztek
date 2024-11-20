import React from 'react';


const DiamondCard = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col items-center group relative mx-2 sm:mx-4">
      {/* Card Container */}
      <div
        className="relative transition-all duration-300 ease-in-out group-hover:scale-105 
          w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 overflow-hidden rounded-xl border-4 border-white 
          transform md:rotate-45 md:group-hover:rotate-45 md:group-hover:scale-105"
      >
        {/* Background color transition */}
        <div className="absolute inset-0 bg-gray-800 transition-all duration-500 ease-in-out group-hover:bg-[#508C9B]"></div>
        {/* Line animation */}
        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#508C9B] transition-all duration-500 ease-in-out group-hover:h-full"></div>
        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform md:-rotate-45 rounded-xl transition-all duration-300 ease-in-out"
        />
      </div>
      {/* Title */}
      <div className="mt-4 sm:mt-6 lg:mt-14">
        <h2
          className="text-white text-center text-sm sm:text-base lg:text-lg"
          dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }}
        />
      </div>
    </div>
  );
};

export default DiamondCard;
