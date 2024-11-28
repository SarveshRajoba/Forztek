import React from 'react';
import ServicesTable from './ServicesTable';
import img1 from '../assets/services1.png';
import img2 from '../assets/services2.png';
import Line from '../components/Line';

const Services = () => {
  return (
    <div id="training" className="min-h-screen md:flex group bg-white justify-center items-center">
      {/* Left Section with Heading and Line */}
      <div className="ml-10 md:ml-0 text-center md:text-left">
        <div className="text-4xl md:pt-0 pt-20">
          <p>Services</p>
          <p>Offered</p>
        </div>
        {/* Line component with proper alignment */}
        <div className="flex justify-center md:justify-start ">
          <Line />
        </div>
      </div>

      {/* Right Section with Table and Images */}
      <div className="flex mt-[60px] md:ml-[100px] gap-28">
        <ServicesTable />
        <div className="hidden lg:block ml-3">
          <img className="w-7/8" src={img1} alt="Image 1" />
          <img className="w-7/8 mt-11" src={img2} alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default Services;
