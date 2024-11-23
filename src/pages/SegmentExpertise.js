import React from "react";
import manu_icon from "../assets/manufacture_icon.gif";
import {
  Cog6ToothIcon, // Replaces CogIcon
  FireIcon,
  BoltIcon, // Replaces LightningBoltIcon
  CakeIcon,
  BuildingOfficeIcon, // Replaces OfficeBuildingIcon
  CubeIcon,
} from "@heroicons/react/24/outline"; // Correct import for v2

const SegmentExpertise = () => {
  const services = [
    {
      title: "General Machinery",
      description:
        "Efficient, durable machinery tailored to streamline and optimize industrial operations.",
      icon: {manu_icon},
    },
    {
      title: "Oil and Gas",
      description:
        "Robust solutions designed for safe, efficient extraction and processing in demanding environments.",
      icon: <FireIcon className="h-8 w-8 text-black" />,
    },
    {
      title: "Energy",
      description:
        "Reliable machinery supporting sustainable power generation and seamless energy distribution.",
      icon: <BoltIcon className="h-8 w-8 text-black" />,
    },
    {
      title: "Food and Beverage",
      description:
        "Hygienic, precise equipment ensuring high-quality production and safety standards.",
      icon: <CakeIcon className="h-8 w-8 text-black" />,
    },
    {
      title: "Heavy Industry",
      description:
        "Heavy-duty machinery engineered for durability and peak performance under intense workloads.",
      icon: <BuildingOfficeIcon className="h-8 w-8 text-black" />,
    },
    {
      title: "Manufacturing",
      description:
        "Precision machinery enhancing productivity, quality, and cost efficiency in manufacturing.",
      icon: <CubeIcon className="h-8 w-8 text-black" />,
    },
  ];

  return (
    <section className="bg-white py-12 my-11">
      <div className="flex max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between ">
          <div className="h-full w-full md:w-1/5 flex flex-col items-center justify-center text-left ">
            <div className="h-full flex flex-col justify-center items-start">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Segment Expertise
              </h2>
              <div className="w-2/4 bg-[#201E43] h-2 rounded-full my-6"></div>
              <button
                className="px-6 py-2 text-white rounded-[50px] hover:bg-[#4F46E5] transition-colors duration-300 my-3"
                style={{
                  background:
                    "linear-gradient(90deg, #201E43 0%, #514CA9 100%)",
                }}
              >
                View all services
              </button>
            </div>
          </div>

          <div className="w-full h-full md:w-4/5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left p-4"
              >
                   <div className="flex items-center justify-center w-20 h-20 border-8 border-[#201E43] rounded-full mx-auto mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 mx-auto">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm font-">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentExpertise;