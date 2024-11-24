import React from "react";
import DiamondCard from "../components/DiamondCard";
import Line from "../components/Line";


const offeringData = [
  {
    imageSrc: "/Photo1.png",
    title: "Industrial Product Design,\n Manufacturing & Assembly",
  },
  {
    imageSrc: "/Photo2.png",
    title: "Engineering Services \n& Training",
  },
];

const OurOffering = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-forztek-blue min-h-screen">
      {/* Left Side: Title */}
      <div className="flex flex-col items-start justify-center mb-10 md:mb-0 md:w-1/3">
        <div className="group">
          <h1 className="text-5xl text-white font-bold mb-4 text-left">
            Our Offerings
          </h1>
          <Line />
        </div>
      </div>

      {/* Right Side: Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full md:w-2/3">
        {offeringData.map((offering, index) => (
          <DiamondCard
            key={index}
            imageSrc={offering.imageSrc}
            title={offering.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OurOffering;
