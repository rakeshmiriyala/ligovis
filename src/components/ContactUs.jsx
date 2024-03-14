import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="flex justify-center items-center"
      style={{
        background:
          "linear-gradient(rgb(112, 93, 239 , 0.7), rgb(112, 93, 239, 0.7))",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto p-4">
        <h1
          className="text-2xl sm:text-4xl text-center text-white font-bold mb-4 font-sans"
          data-aos="fade-down"
          data-aos-duration="1000"
          style={{ fontFamily: "'Prompt', sans-serif" }}
        >
          Connect Us
        </h1>
        <p
          className="mb-4 text-sm sm:text-lg text-white text-center sm:block"
          data-aos="fade-down"
          data-aos-duration="1000"
          style={{ fontFamily: "PT Sans Caption, sans-serif" }}
        >
          Get in touch with Ligovis today to explore how their comprehensive web
          services can elevate your digit presence and security measures.
        </p>
        <div
          className="flex flex-col sm:flex-row-reverse"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="sm:w-1/2 pl-0 sm:pl-4 mb-4 sm:mb-0">
            <div className="bg-white p-4 shadow-md rounded-3xl">
              <h2
                className="text-lg sm:text-xl font-semibold mb-2 text-start sm:text-left"
                style={{ color: "rgb(134, 114, 243)" }}
              >
                Get in Touch
              </h2>
              <p
                className="mb-4 text-sm sm:text-base text-gray-600 text-start sm:text-left"
                style={{ color: "rgb(134, 114, 243)" }}
              >
                You can reach us anytime.
              </p>
              <div className="">
                <input
                  className="w-full bg-white p-2 rounded-md mb-2 border  focus:border-2"
                  type="text"
                  placeholder="Name"
                  style={{
                    fontSize: "16px",
                    borderColor: "rgb(134, 114, 243)",
                    color: "rgb(134, 114, 243)",
                    fontFamily: "PT Sans Caption, sans-serif",
                  }}
                />
                <div
                  className="flex items-center border rounded-md p-2 mb-2"
                  style={{
                    fontSize: "16px",
                    borderColor: "rgb(134, 114, 243)",
                    color: "rgb(134, 114, 243)",
                    fontFamily: "PT Sans Caption, sans-serif",
                  }}
                >
                  <span className="mr-2">
                    <IoMdMail className="w-6 h-6" />
                  </span>
                  <input
                    className="w-full bg-transparent focus:outline-none"
                    type="email"
                    placeholder="Email"
                    style={{
                      fontSize: "16px",
                      borderColor: "rgb(134, 114, 243)",
                      color: "rgb(134, 114, 243)",
                      fontFamily: "PT Sans Caption, sans-serif",
                    }}
                  />
                </div>
                <input
                  className="w-full bg-white p-2 rounded-md mb-2 border focus:border-2"
                  type="tel"
                  placeholder="+91 Phone number"
                  style={{
                    fontSize: "16px",
                    borderColor: "rgb(134, 114, 243)",
                    color: "rgb(134, 114, 243)",
                    fontFamily: "PT Sans Caption, sans-serif",
                  }}
                />
              </div>
              <textarea
                className="w-full bg-white p-2 border rounded-md mb-2 focus:border-2"
                rows="4"
                placeholder="How can we help?"
                style={{
                  fontSize: "16px",
                  borderColor: "rgb(134, 114, 243)",
                  color: "rgb(134, 114, 243)",
                  fontFamily: "PT Sans Caption, sans-serif",
                }}
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl"
                  style={{
                    backgroundColor: "rgb(134, 114, 243)",
                    fontFamily: "PT Sans Caption, sans-serif",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 sm:pr-0 sm:pl-10 md:pl-10">
            <br />
            <p className="mb-2 text-white text-lg text-center hidden sm:block sm:text-left">
              Email, call or complete the form to know how Ligovis can address
              your query.
            </p>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row items-center mb-2 sm:px-0 text-white text-lg text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-2 sm:mb-0 sm:mr-2">
                <FaMapMarkerAlt
                  className="w-8 h-8"
                  style={{ color: "rgb(134, 114, 243)" }}
                />
              </div>
              <span className="text-white text-2xl">Hyderabad</span>
            </div>
            <br />
            <div className="flex flex-col sm:flex-row items-center mb-2 sm:px-0 text-white text-lg text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-2 sm:mb-0 sm:mr-2">
                <MdMarkEmailRead
                  className="w-8 h-8"
                  style={{ color: "rgb(134, 114, 243)" }}
                />
              </div>
              <span className="text-white text-2xl">info@ligovis.com</span>
            </div>
            <br />
            <div className="flex flex-col sm:flex-row items-center mb-2 sm:px-0 text-white text-lg text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-2 sm:mb-0 sm:mr-2">
                <FaPhoneAlt
                  className="w-7 h-7"
                  style={{ color: "rgb(134, 114, 243)" }}
                />
              </div>
              <span className="text-white text-xl">+91 7671091557</span>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
