import React, { useState } from "react";
import { InView } from 'react-intersection-observer'; // Import the InView component from react-intersection-observer
import Line from "../components/Line";

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already occurred

  // Function to handle when the component is in view
  const handleInView = (inView) => {
    if (inView && !hasAnimated) { // Trigger animation only once
      setAnimate(true); // Trigger animation when the component comes into view
      setHasAnimated(true); // Set that animation has already been triggered
    }
  };

  return (
    <div id="about" className="bg-white text-gray-900 px-6 py-2 lg:min-h-screen mx-auto">
      {/* About Section */}
      <InView onChange={handleInView} triggerOnce={true}> {/* triggerOnce ensures it's only checked once */}
        {/* About Us Image */}
        <div className="lg:mt-40 sm: mt-12 lg:mb-20 sm: mb-6 my-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:[py-1]">
          <img
            className={`hidden sm:block ml-10 flex-shrink-2 object-cover shadow-lg shadow-blue-500/50 w-[600px] h-[380px] rounded-lg`}
            src="/aboutUs.jpg"
            alt="About Us"
          />
          {/* About Us Information */}
          <div
            className={`mt-0 group md:mt-0 max-w-xl md:text-left md:ml-6 sm: ml-6 mr-6 sm: mb-6 lg:mr-20 sm:mr-20 transition-transform duration-1000 ${animate ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h1 className="text-4xl font-bold text-left mb-6">
              Creating Value, <span className="block">Together</span>
            </h1>
            <div>
              <Line />
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
      </InView>
    </div>
  );
};

export default AboutUs;
