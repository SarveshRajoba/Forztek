import Blueline from "../components/blueline";
import "../index.css";

import React from "react";


const Home = () => {

  return (
    <div>
      <section
        className="h-screen bg-cover bg-center flex items-center justify-between text-white text-center relative px-6 sm:px-8 md:px-12 lg:px-16"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold animate-fade-in">
            Forztek
          </h1>
          <Blueline />
          <div className="flex flex-col items-start">
            {/* <div className="h-1 w-12 bg-blue-500 mt-3 sm:mt-4 border rounded-lg"></div> */}


            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 animate-slide-in">
              Engineering
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-1 sm:mt-2 animate-slide-in">
              Excellence Redefined
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
