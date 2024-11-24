import React from 'react'
import ServicesTable from './ServicesTable';
import img1 from "../assets/services1.png";
import img2 from "../assets/services2.png";
import Line from "../components/Line";


const Services = () => {
  return (
    <div id="training" className="min-h-screen flex bg-white justify-center items-center">
      <div className="w-max  text-4xl  ">
         Services Offered
      </div>
      <div className="flex mr-[100px] mt-[60px]">
     
          <ServicesTable />
        
        <div className=" hidden lg:block">
          <img className="p-3" src={img1} alt="Image 1" />
          <img className="p-3" src={img2} alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default Services;
