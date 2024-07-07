import React from "react";
import { FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const ThreeEqualBoxes = () => {
  return (
    <div className="flex flex-wrap bg-white justify-center">
      {/* Box 1 */}
      <div className="w-full md:w-1/3 p-4">
        <div className="p-4 h-full rounded-lg flex text-black flex-col justify-center items-center">
          <h2
            className="text-2xl font-bold text-left"
            style={{
              fontFamily: "'MuseoModerno', sans-serif",
              color: "rgb(134, 114, 243)",
            }}
          >
            Ligovis
          </h2>
          <p className="text-center">
            It's a simple yet important notice that underscores the commitment
            to protecting the creative works and upholding the rights under
            copyright law.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="w-full md:w-1/3 p-4">
        <div className="p-4 h-full rounded-lg flex flex-col text-black justify-center items-center">
          <div className="flex items-center">
            <BiLogoGmail
              className="h-7 w-7 mr-2"
              style={{ color: "rgb(134, 114, 243)" }}
            />
            <p className="text-lg">info@ligovis.com</p>
          </div>
          <div className="flex text-left mt-2">
            <FaPhoneAlt
              className="h-6 w-6 mr-2"
              style={{ color: "rgb(134, 114, 243)" }}
            />
            <p className="text-lg">+91 7995916970</p>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="w-full md:w-1/3 p-4">
        <div className="p-4 h-full rounded-lg flex flex-col text-black justify-center items-center">
          <h2 className="text-2xl font-semibold text-black">Follow Us</h2>
          <div className="flex mt-2">
            <a href="#linkedin" className="mr-2">
              <FaLinkedin
                className="h-7 w-7"
                style={{ color: "rgb(134, 114, 243)" }}
              />
            </a>
            <a href="#twitter" className="mr-2">
              <FaXTwitter
                className="h-7 w-7"
                style={{ color: "rgb(134, 114, 243)" }}
              />
            </a>
            <a href="#instagram" className="mr-2">
              <FaInstagram
                className="h-7 w-7"
                style={{ color: "rgb(134, 114, 243)" }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center pb-4">
        <p className="text-gray-600 text-lg">
          &copy; {new Date().getFullYear()} Ligovis. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ThreeEqualBoxes;
