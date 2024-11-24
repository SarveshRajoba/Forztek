import React from "react";
import ServicesTable from "./ServicesTable";
import img1 from "../assets/services1.png";
import img2 from "../assets/services2.png";
import Line from "../components/Line";

const Services = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="font-serif text-4xl ml-20 mt-10 w-max ">
          Services Offered
        </h1>
        <Line />
      </div>
      <div className="flex justify mt-10">
        <div className=" w-[1400px]">
          <ServicesTable />
        </div>
        <div className="mr-14 hidden lg:block">
          <img className="p-3" src={img1} alt="Image 1" />
          <img className="p-3" src={img2} alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default Services;
