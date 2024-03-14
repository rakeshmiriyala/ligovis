import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaDribbble,
  FaWhatsapp,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import Typed from "typed.js";
import { FaPhoneVolume } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [knowMore, SetKnowMore] = useState(false);
  const iconsRef = useRef(null);

  const toggleKnowMore = () => {
    SetKnowMore(!knowMore);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (iconsRef.current && !iconsRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [iconsRef]);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".auto-type", {
      strings: ["MEETS SECURITY", "MEETS DEVELOPMENT"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    // Clean up
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col items-start justify-start relative h-screen"
      style={{
        background: `linear-gradient(rgb(112, 93, 239 , 0.9), rgb(112, 93, 239, 0.7)) `,
        backgroundSize: "cover",
        textAlign: "left",
        paddingLeft: "10vw",
        paddingTop: "15vh",
        minHeight: "80vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div className="block  lg:hidden absolute top-4 right-4">
        <button onClick={toggleMenu} className="color-white">
          <svg
            className="w-8 h-8 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showMenu ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {showMenu && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(130, 112, 241, 0.8)",
            zIndex: 10,
          }}
        />
      )}

      <div
        ref={iconsRef}
        className={`${
          showMenu
            ? "aside-icons absolute top-40 right-0 z-10 bg-gray-900 opacity-90"
            : "hidden lg:flex aside-icons absolute top-30 right-0 "
        } m-4`}
      >
        <div className="flex flex-col gap-2 items-center z">
          <div data-aos="fade-left" className="aos-icons">
            <a href="#home">
              <FaHome className="icon text-white text-5xl m-2" />
            </a>
          </div>
          <div data-aos="fade-left" className="aos-icons">
            <FaDribbble className="icon text-white text-5xl m-2" />
          </div>
          <div data-aos="fade-left" className="aos-icons">
            <FaWhatsapp className="icon text-white text-5xl m-2" />
          </div>
          <div data-aos="fade-left" className="aos-icons">
            <a href="#services">
              <FaCloudUploadAlt className="icon text-white text-5xl m-2" />
            </a>
          </div>
          <div data-aos="fade-left" className="aos-icons">
            <a href="#contactus">
              <FaPhoneVolume className="icon text-white text-5xl m-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col ml-2 sm:ml-5 mt-20 xl:ml-12 lg:10 ">
        <div className="flex justify-start items-start text-white mb-8">
          <h1
            className="lg:text-9xl md:text-6xl sm:text-4xl text-5xl"
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            data-aos-duration="2000"
            style={{
              fontFamily: "'MuseoModerno', sans-serif",
            }}
          >
            L I G O V I S
          </h1>
        </div>
        <div
          className=" flex justify-left caption text-white sm:ml-5 mb-4 text-2xl"
          data-aos="fade-right"
          data-aos-easing="ease-out-sine"
          data-aos-duration="2500"
          style={{
            letterSpacing: "0.3em",
            fontWeight: "600",
            fontFamily: "Anta, sans-serif",
          }}
        >
          <h2>
            KNOWLEDGE <span className="auto-type"></span>
          </h2>
        </div>
        <div className=" paragraph text-white pr-4 lg:pr-44 ml-0 pt-0 lg:ml-4 cursor-pointer xl:ml-4">
          {!knowMore ? (
            <h1
              className="flex items-center text-2xl"
              style={{
                fontWeight: "600",
              }}
              onClick={toggleKnowMore}
            >
              Know More{" "}
              <FaArrowRightLong
                style={{
                  marginLeft: "6px",
                  marginTop: "7px",
                  verticalAlign: "middle",
                }}
              />{" "}
            </h1>
          ) : (
            <h1
              className="flex items-center text-2xl"
              style={{
                fontWeight: "600",
              }}
              onClick={toggleKnowMore}
            >
              Know Less <hr></hr>
              <FaArrowUp
                style={{
                  marginLeft: "6px",
                  marginTop: "7px",
                  verticalAlign: "middle",
                }}
              />{" "}
            </h1>
          )}
          {knowMore && (
            <p className="text-xl" style={{ fontFamily: "poppins" }}>
              "Ligovis is a comprehensive website offering a range of service
              focused on Web design,Web development & Security.Its key features
              includes professional web design services tailored to meet the
              unique needs of clients.Ligovis specializes in web pentesting &
              Api pentesting,ensuring the integrity and reliability of web
              application through rigorous testing methodologies"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
