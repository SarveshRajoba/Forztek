import React from 'react';

function VisionMission() {
    return (
        <div className="flex flex-col sm:flex-row h-auto sm:h-screen relative">
            {/* Left Section */}
            <div className="w-full sm:w-1/2 bg-[#201E43] text-white flex flex-col justify-center items-center px-6 py-6">
                <h1 className="text-3xl sm:text-5xl font-serif font-semibold lg:mr-20 md:mr-20  lg:mb-4 md:mb-4 sm:mb-20 sm:mr-0 tracking-wider">
                    VISION
                </h1>
                <p className="text-base sm:text-2xl font-serif leading-relaxed text-center mt-5 sm:text-left w-[150px] lg:w-[280px] md:w-[280px]">
                    A future where our solutions contribute to a reliable and sustainable green world.
                </p>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-1/2 bg-white text-black flex flex-col justify-center items-center px-6 py-6">
                <h1 className="text-3xl sm:text-5xl font-serif font-semibold lg:mr-9 md:mr-9  lg:mb-4 md:mb-4 sm:mb-20 sm:mr-0 tracking-wider">
                    MISSION
                </h1>
                <p className="text-base sm:text-2xl font-serif leading-relaxed text-center mt-5 sm:text-left w-[150px] lg:w-[280px] md:w-[280px]">
                    To help customers & be the leader in innovative and sustainable solutions for rotating equipment.
                </p>
            </div>

            {/* Centered Image */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <img
                    src="/vision_mission.png"
                    alt="Vision and Mission Graphic"
                    className="w-[400px] h-[400px] object-contain"
                />
            </div>
        </div>
    );
}

export default VisionMission;
