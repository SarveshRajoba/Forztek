// src/pages/AboutUs.js
import React from "react";
// import Blueline from "../components/blueline";

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-900 px-6 py-6 max-w-screen-xl mx-auto mt-5 mb-5">
            {/* About Section */}
            <div className="mt-20 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* About Us Image */}
                <div className="flex-shrink-0 mb-6 md:mb-0">
                    <img
                        src="/aboutUs_image.png"
                        alt="About Us"
                        className="w-[400px] h-[450px] object-cover"
                    />
                </div>

                {/* About Us Information */}
                <div className="text-lora mt-0 md:mt-0 max-w-xl text-center md:text-left md:ml-6"> {/* Reduced only the left margin */}
                    <h1 className="font-serif text-4xl font-bold mb-3">
                        Creating Value, <span className="block">Together</span>
                    </h1>
                    <div>
                        <div className="w-32 h-1 mt-2 bg-blue-400 rounded-3xl mb-8 mx-auto md:mx-0"></div>
                    </div>
                    <p className="text-lg text-gray-600 text-justify leading-relaxed mt-4">
                        At Forztek, we specialize in engineering solutions for rotating applications, offering customized bearing
                        arrangements for gearboxes, fans, blowers, and high-speed drives. Our expertise includes advanced simulations
                        (FEA, CFD, CAE) and high-speed shaft mode analysis to ensure performance and durability. We also provide
                        comprehensive CAD and CAE services, covering 3D modeling, manufacturing drawings, and component strength analysis.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;
