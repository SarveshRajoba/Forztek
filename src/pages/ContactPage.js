import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Line from "../components/Line";

const ContactPage = () => {
  const [popupMessage, setPopupMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "864e87d3-720f-4d1c-9930-16fe223de0c8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!res.ok) {
        throw new Error("Failed to submit form: " + res.statusText);
      }

      const data = await res.json();

      if (data.success) {
        setPopupMessage("Form Submitted Successfully!");
        event.target.reset(); // Clear form fields
      } else {
        setPopupMessage("Form Submission Failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setPopupMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#201E43] text-white">
      {/* Popup Message */}
      {popupMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl text-black font-semibold">{popupMessage}</p>
            <button
              onClick={() => setPopupMessage("")}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 py-12 gap-6">
        {/* Left Section (Contact Us and Map) */}
        <div className="w-full md:w-3/5 flex flex-col">
          <div className="mb-8 text-left group">
            <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
            <div className="mb-6">
              <Line />
            </div>
            <div>
              <p className="text-xl md:text-3xl text-gray-400 font-semibold mb-3">
                Address:
              </p>
              <p className="ml-4 mb-2">Office: FORZTEK Solutions,
                3rd floor, OZ plaza, Viman Nagar, Pune 411014.
              </p>
              <p className="ml-4">Works: FORZTEK Solutions,
                JVMC+82M, Shri Gajanan Maharaj Nagar, Dighi, Pimpri-Chinchwad, Maharashtra 411039
              </p>
            </div>
            <div className="mt-6">
              <p className="text-xl md:text-3xl text-gray-400 font-semibold mb-3">
                Contact Details:
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mr-2 ml-3 mb-2"
                />{" "}
                +91 7829294600
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 ml-3 mb-2"
                />{" "}
                mahavir.kanwade@forztek.com

              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 ml-3" />{" "}
                <a href="https://forztek.com" className="underline">
                  https://forztek.com
                </a>
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full mt-6">
            <iframe
              className="w-full h-48 md:h-72"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.720112676396!2d73.8567430154444!3d18.520430387397007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07c5a45c871%3A0xe38b6a6a5a6fcb35!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697236850985!5m2!1sen!2sin"
              title="Google Map"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="w-full md:w-2/5 bg-white bg-opacity-15 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Get a quote
          </h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full p-3 mb-4 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              className="w-full p-3 mb-4 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Company Name"
              name="Company Name"
              className="w-full p-3 mb-4 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Phone No."
              name="Phone No."
              className="w-full p-3 mb-4 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Problem statement"
              name="Message"
              className="w-full p-3 mb-4 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 h-28"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-60 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Shadow Line Between the Sections */}
      <div className="w-full h-[1px] bg-gray-400 mt-6"></div>

    </div>
  );
};

export default ContactPage;














// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import Line from "../components/Line";
// const ContactPage = () => {
//   const [popupMessage, setPopupMessage] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "864e87d3-720f-4d1c-9930-16fe223de0c8");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//       });

//       if (!res.ok) {
//         throw new Error('Failed to submit form: ' + res.statusText);
//       }

//       const data = await res.json();

//       if (data.success) {
//         console.log("Success", data);
//         setPopupMessage("Form Submitted Successfully!");
//         event.target.reset(); // Clear form fields
//       } else {
//         console.log("Submission failed", data);
//         setPopupMessage("Form Submission Failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//       setPopupMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#201E43]">
//       {/* Popup Message */}
//       {popupMessage && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <p className="text-xl font-semibold">{popupMessage}</p>
//             <button
//               onClick={() => setPopupMessage("")}
//               className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Map Section */}
//       <div className="relative h-48 sm:h-72 w-full mb-8">
//         <iframe
//           className="absolute inset-0 w-full h-full"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.720112676396!2d73.8567430154444!3d18.520430387397007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07c5a45c871%3A0xe38b6a6a5a6fcb35!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697236850985!5m2!1sen!2sin"
//           title="Google Map"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       {/* Contact Form Section */}
//       <div className="relative -mt-24 sm:-mt-36 w-[500px] mx-auto">
//         <div className="max-w-xl sm:max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-lg shadow-lg space-y-6 group">
//           <h1 className="text-center text-2xl sm:text-3xl font-extrabold mb-6">Contact us</h1>
//           <div className="flex items-center justify-center">
//             <Line/>
//           </div>
//           <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={onSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="Email"
//               className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="Company Name"
//               name="Company Name"
//               className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="Phone No."
//               name="Phone No."
//               className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <textarea
//               placeholder="Problem statement"
//               name="Message"
//               className="col-span-1 sm:col-span-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-28"
//             ></textarea>
//             <button
//               type="submit"
//               className="col-span-1 sm:col-span-2 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="bg-[#201E43] text-white py-8 mt-10">
//         <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-8">
//           <p className="flex items-center justify-center px-4">
//             <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +91 924456545
//           </p>
//           <p className="flex items-center justify-center px-4">
//             <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> mail@mail.com
//           </p>
//           <p className="flex items-center justify-center px-4">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Pune City, Pune
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactPage;
