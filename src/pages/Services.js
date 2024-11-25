import React from 'react'
import ServicesTable from './ServicesTable';
import img1 from "../assets/services1.png";
import img2 from "../assets/services2.png";
import Line from "../components/Line";


const Services = () => {
  return (
    <div id="training" className="min-h-screen flex group bg-white justify-center items-center">
      <div className='ml-10 '>
        <div className="text-4xl ">
          <p>Services</p>
            <p>Offered</p>
        </div>
         <Line/>
      </div>
     
      <div className="flex  mt-[60px] ml-[100px]">
     
          <ServicesTable />
        
        <div className=" hidden lg:block ml-3">
          <img className="w-3/4" src={img1} alt="Image 1" />
          <img className="w-3/4 mt-11" src={img2} alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default Services;
