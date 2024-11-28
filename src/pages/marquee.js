import React from "react";
import Marquee from "react-fast-marquee";
import Line from "../components/Line";

const companydata = [
  {
    icon: "./aethrone_aerospace.png",
    name: "Aethrone Aerospace",
    site: "https://www.aethroneaerospace.com/",
  },
  {
    icon: "./elin_logo.svg",
    name: "Elin Motor",
    site: "https://www.elinmotoren.com/en/",
  },
  { icon: "./Logo-SKF.svg", name: "SKF", site: "https://www.skf.com/group" },
  { icon: "./LOGO_ONLY.png", name: "Iabex", site: "https://iabex.net/" },
  {
    icon: "./Maker-Strive-Final-Logo-01.png",
    name: "Maker Strive",
    site: "https://makerstrive.com/",
  },
];

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
    <div className="bg-white">
      <h1 className="text-center text-4xl font-bold py-4">Our Clients</h1>
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
