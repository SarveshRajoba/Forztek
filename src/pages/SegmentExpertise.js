import React from "react";
import Line from "../components/Line";

const SegmentExpertise = () => {
  // Updated services array with image paths from the assets folder
  const services = [
    {
      title: "General Machinery",
      description:
        "Efficient, durable machinery tailored to streamline and optimize industrial operations.",
      image: require("../assets/manufacture_icon.gif"), // Dynamically load image
    },
    {
      title: "Oil and Gas",
      description:
        "Robust solutions designed for safe, efficient extraction and processing in demanding environments.",
      image: require("../assets/oil-pump-unscreen.gif"), // Replace with actual image file
    },
    {
      title: "Energy",
      description:
        "Reliable machinery supporting sustainable power generation and seamless energy distribution.",
      image: require("../assets/electricity-unscreen.gif"), // Replace with actual image file
    },
    {
      title: "Food and Beverage",
      description:
        "Hygienic, precise equipment ensuring high-quality production and safety standards.",
      image: require("../assets/catering-unscreen.gif"), // Replace with actual image file
    },
    {
      title: "Heavy Industry",
      description:
        "Heavy-duty machinery engineered for durability and peak performance under intense workloads.",
      image: require("../assets/assembly-line-unscreen.gif"), // Replace with actual image file
    },
    {
      title: "Manufacturing",
      description:
        "Precision machinery enhancing productivity, quality, and cost efficiency in manufacturing.",
      image: require("../assets/factory-unscreen.gif"), // Replace with actual image file
    },
  ];

  return (
    <div className=" min-h-screen flex bg-white ">
      <div className="flex md:mx-auto my-auto mx-[100px]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="h-full w-full md:w-1/5 flex flex-col items-center justify-center text-left">
            <div className="h-full flex flex-col justify-center items-start group"> {/* Add group class here */}
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Segment Expertise
              </h2>
              <Line />

            </div>
          </div>

          <div className="w-full h-full md:w-4/5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="flex items-center justify-center w-20 h-20 border-8 border-[#201E43] rounded-full mx-auto mb-4">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm w-[200px] md:w-[245px]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentExpertise;
