import React from "react";
import Marquee from "react-fast-marquee";
import Line from "../components/Line";
import companydata from "../data/Client"
 
const Companies = ({ company }) => (
  <div className="">
    <a href={company.site} className="flex items-center justify-center mx-8 w-52 h-auto" target="_blank" rel="noreferrer">
      <img
        src={company.icon}
        alt={company.name}
        className="object-contain hover:grayscale-0 transition-all duration-300"
      />
    </a>
  </div>
);

const MarqueeComponent = () => {
  return (
    <div className="bg-white group">
      <h1 className="text-center text-4xl font-bold ">Our Clients</h1>
      <div className="flex justify-center items-center -translate-x-12 py-4">
          <Line/>
      </div>
      <Marquee
        gradient={true}
        gradientWidth={200}
        pauseOnHover
        className="bg-white py-10 overflow-hidden"
      >
        {companydata.map((company, index) => (
          <Companies key={index} company={company} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
