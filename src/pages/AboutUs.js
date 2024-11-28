import React, { useState } from "react";
import { InView } from "react-intersection-observer"; // Import the InView component from react-intersection-observer
import Line from "../components/Line";

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already occurred

  // Function to handle when the component is in view
  const handleInView = (inView) => {
    if (inView && !hasAnimated) {
      setAnimate(true);
      setHasAnimated(true);
    }
  };

  return (
    <div id="about" className="bg-white text-gray-900 px-6 py-10 min-h-screen mx-auto">
      {/* About Section */}
      <InView onChange={handleInView} triggerOnce={true}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-20 mb-20">
          {/* About Us Image */}
          <img
            className="flex-shrink-0 object-cover shadow-lg shadow-blue-500/50 w-full max-w-md h-auto rounded-lg md:w-[50%]"
            src="/aboutUs.jpg"
            alt="About Us"
          />
          {/* About Us Information */}
          <div
            className={`group max-w-xl text-center md:text-left transition-transform duration-1000 ${animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Creating Value, <span className="block">Together</span>
            </h1>
            <div className="relative flex justify-center md:justify-start">
              <Line />
            </div>
            <p className="text-base sm:text-lg text-gray-600 text-justify leading-relaxed mt-4">
              At Forztek, we specialize in engineering solutions for rotating applications, offering customized bearing arrangements for gearboxes, fans, blowers, and high-speed drives. Our expertise includes advanced simulations (FEA, CFD, CAE) and high-speed shaft mode analysis to ensure performance and durability. We also provide comprehensive CAD and CAE services, covering 3D modeling, manufacturing drawings, and component strength analysis.
            </p>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default AboutUs;
