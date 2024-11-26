import React, { useRef, useEffect, useState } from 'react';
import Line from "../components/Line";


function VisionMission() {
    const [animateVision, setAnimateVision] = useState(false);
    const [animateMission, setAnimateMission] = useState(false);
    const [animateImage, setAnimateImage] = useState(false);

    const visionRef = useRef(null);
    const missionRef = useRef(null);
    const imageRef = useRef(null);

    const observer = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.2 };

        if (!observer.current) {
            observer.current = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === visionRef.current) setAnimateVision(true);
                        if (entry.target === missionRef.current) setAnimateMission(true);
                        if (entry.target === imageRef.current) setAnimateImage(true);
                    }
                });
            }, observerOptions);
        }

        if (visionRef.current) observer.current.observe(visionRef.current);
        if (missionRef.current) observer.current.observe(missionRef.current);
        if (imageRef.current) observer.current.observe(imageRef.current);

        return () => {
            if (visionRef.current) observer.current.unobserve(visionRef.current);
            if (missionRef.current) observer.current.unobserve(missionRef.current);
            if (imageRef.current) observer.current.unobserve(imageRef.current);
        };
    }, []);

    return (
        <div className="flex flex-col sm:flex-row h-auto sm:h-screen relative lg:min-h-screen">
            <div
                ref={visionRef}
                className={`w-full group sm:w-1/2 bg-[#201E43] text-white flex flex-col justify-center items-center px-6 py-6 transition-all duration-1000 ${animateVision ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
            >
                <h1 className="text-3xl sm:text-5xl font-semibold lg:mr-20 md:mr-20 lg:mb-4 md:mb-4 sm:mb-0 sm:mr-0 tracking-wider">
                    VISION
                </h1>
                <div className="flex lg:-translate-x-20 md:-translate-x-20">
                    <Line />
                </div>
                <p className="text-base sm:text-2xl leading-relaxed mt-5 sm:mb-0 text-left w-[150px] lg:w-[280px] md:w-[280px]">
                    A future where our solutions contribute to a reliable and sustainable green world.
                </p>
            </div>

            <div
                ref={missionRef}
                className={`lg:mt-8 md:mt-8 w-full sm:w-1/2 group bg-white text-black flex flex-col justify-center items-center px-6 py-6 transition-all duration-1000 ${animateMission ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                    }`}
            >
                <h1 className="text-3xl sm:text-5xl font-semibold lg:mr-9 md:mr-9 lg:mb-4 md:mb-4 sm:mb-0 sm:mr-0 tracking-wider">
                    MISSION
                </h1>
                <div className="flex lg:-translate-x-20 md:-translate-x-20">
                    <Line />
                </div>
                <p className="text-base leading-relaxed mt-5 sm:mb-0 text-left w-[150px] md:w-[280px] lg:w-[280px] sm:text-2xl">
                    To help customers & be the leader in innovative and sustainable solutions for rotating equipment.
                </p>
            </div>

            <div
                ref={imageRef}
                className={`hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000 ${animateImage ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
            >
                <img
                    src="/vision_mission.png"
                    alt="Vision and Mission Graphic"
                    className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] max-w-full max-h-full object-contain"
                />
            </div>
        </div>
    );
}

export default VisionMission;

