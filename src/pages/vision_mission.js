import React from 'react';

function VisionMission() {
    return (
        <div className="flex h-screen relative">
            {/* Left Section */}
            <div className="w-1/2 bg-[#201E43] text-white flex flex-col justify-center items-center px-6 py-6">
                <h1 className="text-5xl font-serif font-semibold mb-8 tracking-wider">VISION</h1>
                <p className="text-2xl  font-serif leading-relaxed text-center w-[250px]">
                    A future where our solutions contribute to a reliable and sustainable green world.
                </p>
            </div>

            {/* Right Section */}
            <div className="w-1/2 bg-white text-black flex flex-col justify-center items-center px-6 py-6">
                <h1 className="text-5xl  font-serif font-semibold mb-8 tracking-wider">MISSION</h1>
                <p className="text-2xl font-serif leading-relaxed text-center w-[250px]">
                    To help customers & be the leader in innovative and sustainable solutions for rotating equipment.
                </p>
            </div>

            {/* Centered Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
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