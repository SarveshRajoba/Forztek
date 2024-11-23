import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#201E43]">
      {/* Map Section */}
      <div className="relative h-48 sm:h-72 w-full mb-8">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.720112676396!2d73.8567430154444!3d18.520430387397007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07c5a45c871%3A0xe38b6a6a5a6fcb35!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697236850985!5m2!1sen!2sin"
          title="Google Map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="relative -mt-24 sm:-mt-36 w-[500px] mx-auto">
        <div className="max-w-xl sm:max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-lg shadow-lg space-y-6">
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold mb-6">Contact us</h1>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Phone No."
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Problem statement"
              className="col-span-1 sm:col-span-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-28"
            ></textarea>
            <button
              type="submit"
              className="col-span-1 sm:col-span-2 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#201E43] text-white py-8 mt-10">
        <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-8">
          <p className="flex items-center justify-center px-4">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +91 924456545
          </p>
          <p className="flex items-center justify-center px-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> mail@mail.com
          </p>
          <p className="flex items-center justify-center px-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Pune City, Pune
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
