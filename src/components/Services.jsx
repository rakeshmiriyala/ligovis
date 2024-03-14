import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "./../assets/api-removebg-preview.png";
import cloud from "./../assets/cloudn.png";
import develop from "./../assets/developn.png";
import innovate from "./../assets/innovaten.png";
import www from "./../assets/wwwn.png";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "API-PENTESTING",
      imageUrl: api,
      content:
        "Ligovis specializes in API testing, rigorously evaluating the functionality, reliability, and performance.",
    },
    {
      id: 2,
      title: "WEB-SECURITY",
      imageUrl: cloud,
      content:
        "Ligovis prioritizes web security, implementing advanced measures to safeguard online assets, protect sensitive data, and mitigate cyber threats, providing clients with peace of mind and a secure digital environment.",
    },
    {
      id: 3,
      title: "WEB-DEVELOPMENT",
      imageUrl: develop,
      content:
        "Ligovis specializes in robust web development, creating dynamic and scalable solutions tailored to meet the unique needs of each client, ensuring seamless functionality and optimal performance.",
    },
    {
      id: 4,
      title: "WEB-DESIGN",
      imageUrl: innovate,
      content:
        "Ligovis excels in crafting visually stunning and user-friendly web designs that captivate audiences and elevate online brand presence",
    },
    {
      id: 5,
      title: "WEB-PENTESTING",
      imageUrl: www,
      content:
        "Ligovis conducts thorough web penetration testing, systematically assessing vulnerabilities within web applications and infrastructure to identify and address potential security risks.",
    },
  ];
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Set to 1 to display one card at a time in mobile view
        },
      },
    ],
  };

  return (
    <div
      id="services"
      className="h-auto flex flex-col items-center justify-center py-8"
      style={{
        background: `linear-gradient(rgb(112, 93, 239 , 0.7), rgb(112, 93, 239, 0.7)) `,
      }}
    >
      <h1 className="text-5xl font-bold text-white mb-8">SERVICES</h1>
      <div className="w-full" style={{ height: "480px" }} ref={sliderRef}>
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-4 focus:outline-none">
              <div className="bg-white rounded-3xl shadow-lg p-3 h-[420px]">
                <img
                  className="mx-auto h-36"
                  src={card.imageUrl}
                  alt={card.title}
                />
                <div className="text-center mt-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-700">{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
