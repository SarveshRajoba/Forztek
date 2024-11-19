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
        <div className="absolute inset-0 bg-gray-800 transition-all duration-500 ease-in-out group-hover:bg-blue-600"></div>
        {/* Line animation */}
        <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:h-full"></div>
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










// import React from 'react';

// const DiamondCard = ({ imageSrc, title }) => {
//   return (
//     <div className="flex flex-col items-center mx-4 group relative">
//       {/* Shadow Wrapper */}
//       {/* <div className="p-6 rounded-xl shadow-[0px_15px_30px_rgba(0,0,0,0.3)]  group-hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300"> */}
//         {/* Diamond Container */}
//         <div className="relative w-72 h-72 transform rotate-45 overflow-hidden rounded-xl border-4 border-white transition-all duration-300 ease-in-out group-hover:scale-105">
          
//           {/* Background color transition with line animation */}
//           <div className="absolute inset-0 bg-gray-800 transition-all duration-500 ease-in-out group-hover:bg-blue"></div>
          
//           {/* Line Animation from bottom */}
//           <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:h-full"></div>

//           {/* Image inside the card */}
//           <img
//             src={imageSrc}
//             alt={title}
//             className="w-full h-full object-cover transform -rotate-45 rounded-2xl transition-all duration-300 ease-in-out"
//           />
//         {/* </div> */}
//       </div>

//       {/* Title with line break handling */}
//       <div className="mt-14">
//         <h2
//           className="text-white text-center text-lg"
//           dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }}
//         />
//       </div>
//     </div>
//   );
// };

// export default DiamondCard;








