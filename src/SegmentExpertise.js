import React from "react";

const SegmentExpertise = () => {
  const services = [
    {
      title: "General Machinery",
      description:
        "Efficient, durable machinery tailored to streamline and optimize industrial operations.",
      icon: "⚙️",
    },
    {
      title: "Oil and Gas",
      description:
        "Robust solutions designed for safe, efficient extraction and processing in demanding environments.",
      icon: "⛽", // Replace with actual SVG or image
    },
    {
      title: "Energy",
      description:
        "Reliable machinery supporting sustainable power generation and seamless energy distribution.",
      icon: "⚡", // Replace with actual SVG or image
    },
    {
      title: "Food and Beverage",
      description:
        "Hygienic, precise equipment ensuring high-quality production and safety standards.",
      icon: "🍔", // Replace with actual SVG or image
    },
    {
      title: "Heavy Industry",
      description:
        "Heavy-duty machinery engineered for durability and peak performance under intense workloads.",
      icon: "🏭", // Replace with actual SVG or image
    },
    {
      title: "Manufacturing",
      description:
        "Precision machinery enhancing productivity, quality, and cost efficiency in manufacturing.",
      icon: "🏗️", // Replace with actual SVG or image
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="flex max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="h-full w-full md:w-1/5 flex flex-col items-center justify-center text-left">
            <div className="h-full flex flex-col justify-center items-start">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Segment Expertise
              </h2>
              <div className="w-3/4 bg-[#201E43] h-2 rounded-full my-6"></div>
              <button className="px-6 py-2 bg-[#201E43] text-white rounded-lg hover:bg-[#4F46E5] transition-colors duration-300 my-3">
                View all services
              </button>
            </div>
          </div>

          <div className="w-full md:w-4/5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl bg-indigo-100 text-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentExpertise;
