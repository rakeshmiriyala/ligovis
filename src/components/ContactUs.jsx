import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import { sheetDbUrl } from "../config.jsx";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(sheetDbUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Email: email,
              PhoneNo: phone,
              Message: info,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Assuming you want to log the response data

      // Reset state variables to empty after sending
      setName("");
      setEmail("");
      setPhone("");
      setInfo("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };

  return (
    <div
      id="contactus"
      className="flex justify-center items-center"
      style={{
        // background:
        //   "linear-gradient(rgb(112, 93, 239 , 0.7), rgb(112, 93, 239, 0.7))",
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
                className="text-lg sm:text-xl font-semibold mb-2 text-start sm:text-left text-purple-900"
                // style={{ color: "rgb(134, 114, 243)" }}
              >
                Get in Touch
              </h2>
              <p
                className="mb-4 text-sm sm:text-base text-purple-800 text-start sm:text-left"
                // style={{ color: "rgb(134, 114, 243)" }}
              >
                You can reach us anytime.
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="">
                  <input
                    className="w-full bg-white p-2 rounded-md mb-2 border focus:outline-none"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                    style={{
                      fontSize: "16px",
                      // borderColor: "rgb(134, 114, 243)",
                      // color: "rgb(134, 114, 243)",
                      fontFamily: "PT Sans Caption, sans-serif",
                    }}
                    required
                  />
                  <div
                    className="flex items-center border rounded-md text-black p-2 mb-2"
                    style={{
                      fontSize: "16px",
                      // borderColor: "rgb(134, 114, 243)",
                      // color: "rgb(134, 114, 243)",
                      fontFamily: "PT Sans Caption, sans-serif",
                    }}
                  >
                    <span className="mr-2">
                      <IoMdMail className="w-6 h-6 text-purple-900" />
                    </span>
                    <input
                      className="w-full bg-transparent text-black focus:outline-none"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      style={{
                        fontSize: "16px",
                        // borderColor: "rgb(134, 114, 243)",
                        // color: "rgb(134, 114, 243)",
                        fontFamily: "PT Sans Caption, sans-serif",
                      }}
                      required
                    />
                  </div>
                  <input
                    className="w-full bg-white text-black p-2 rounded-md mb-2 border focus:outline-none"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+91 Phone number"
                    style={{
                      fontSize: "16px",
                      // borderColor: "rgb(134, 114, 243)",
                      // color: "rgb(134, 114, 243)",
                      fontFamily: "PT Sans Caption, sans-serif",
                    }}
                    required
                  />
                </div>
                <textarea
                  className="w-full bg-white p-2 text-black border rounded-md mb-2 focus:outline-none"
                  rows="4"
                  value={info}
                  onChange={handleInfoChange}
                  placeholder="How can we help?"
                  style={{
                    fontSize: "16px",
                    // borderColor: "rgb(134, 114, 243)",
                    // color: "rgb(134, 114, 243)",
                    fontFamily: "PT Sans Caption, sans-serif",
                  }}
                  required
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded-2xl"
                    style={{
                      // backgroundColor: "rgb(134, 114, 243)",
                      fontFamily: "PT Sans Caption, sans-serif",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
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
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-purple-900 bg-white mb-2 sm:mb-0 sm:mr-2">
                <FaMapMarkerAlt
                  className="w-8 h-8"
                  // style={{ color: "rgb(134, 114, 243)" }}
                />
              </div>
              <span className="text-white text-2xl">Hyderabad</span>
            </div>
            <br />
            <div className="flex flex-col sm:flex-row items-center mb-2 sm:px-0 text-white text-lg text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center text-purple-900 rounded-full bg-white mb-2 sm:mb-0 sm:mr-2">
                <MdMarkEmailRead
                  className="w-8 h-8"
                  // style={{ color: "rgb(134, 114, 243)" }}
                />
              </div>
              <span className="text-white text-2xl">info@ligovis.com</span>
            </div>
            <br />
            <div className="flex flex-col sm:flex-row items-center mb-2 sm:px-0 text-white text-lg text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-purple-900 bg-white mb-2 sm:mb-0 sm:mr-2">
                <FaPhoneAlt
                  className="w-7 h-7"
                  // style={{ color: "rgb(134, 114, 243)" }}
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
