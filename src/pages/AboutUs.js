// src/pages/AboutUs.js
import React from "react";
// import Blueline from "../components/blueline";.
import Blueline from "../components/blueline";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900 px-6 py-6 min-h-screen mx-auto">
      {/* About Section */}
      <div className="mt-20 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">

        <video
          className="ml-10 flex-shrink-0  object-cover w-1/2 h-auto shadow-neutral-900 shadow-xl w-[600px] h-[500px]"
          src="/video_aboutUs.mp4" // Replace with your video path
          autoPlay
          loop
          muted
        ></video>
        {/* About Us Information */}
        <div className="text-lora mt-0 md:mt-0 max-w-xl text-center md:text-left md:ml-6 mr-10">
          {" "}
          {/* Reduced only the left margin */}
          <h1 className="font-serif text-4xl font-bold mb-3">
            Creating Value, <span className="block">Together</span>
          </h1>
          <div>
            {/* <div className="w-32 h-1 mt-2 bg-blue-400 rounded-3xl mb-8 mx-auto md:mx-0"></div> */}
            <Blueline />
          </div>
          <p className="text-lg text-gray-600 text-justify leading-relaxed mt-4">
            At Forztek, we specialize in engineering solutions for rotating
            applications, offering customized bearing arrangements for
            gearboxes, fans, blowers, and high-speed drives. Our expertise
            includes advanced simulations (FEA, CFD, CAE) and high-speed shaft
            mode analysis to ensure performance and durability. We also provide
            comprehensive CAD and CAE services, covering 3D modeling,
            manufacturing drawings, and component strength analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
