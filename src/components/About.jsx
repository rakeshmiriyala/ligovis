import React from "react";
import companyImage from "./../assets/Aboutt.png";

const About = () => {
  return (
    <div
      className="flex justify-center items-start"
      style={{
        // background: `linear-gradient(rgb(112, 93, 239 , 0.7), rgb(112, 93, 239, 0.7)) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto px-4 mt-8 pt-16 flex flex-wrap">
        <h1
          className="text-4xl font-bold text-white w-full mb-8 py-0 text-center"
          data-aos="fade-down"
          data-aos-duration="2500"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            marginTop: "-20px", // Adjusting margin to move it more to the top
          }}
        >
          About Us
        </h1>
        <div
          className="w-full lg:w-3/4 lg:pr-4 mb-4 lg:mb-0"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <p
            className="text-lg text-white leading-relaxed"
            style={{ fontFamily: "poppins" }}
          >
            At Ligovis, our journey is rooted in a passion for innovation and a
            commitment to excellence. With a dynamic team of experts, we strive
            to redefine standards in the digital realm, crafting tailored
            solutions that merge cutting-edge technology with creative
            ingenuity. Our dedication to client success drives us to
            continuously evolve, ensuring that every project reflects our
            unwavering pursuit of perfection. Discover the essence of Ligovis,
            where vision meets execution to shape remarkable digital
            experiences. we go above and beyond to deliver results that exceed
            expectations. Whether you're a small startup or a large enterprise,
            we have the expertise and experience to help you achieve your
            digital goals.
          </p>
        </div>
        {/* Hide the image in mobile view */}
        <div
          className="w-full lg:w-1/4 hidden lg:block"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <img src={companyImage} alt="Company Imag" className="w-full h-64" />
        </div>
      </div>
    </div>
  );
};

export default About;
