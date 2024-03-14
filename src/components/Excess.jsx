import React from "react";
import "./styles.css"; // Assuming you have TailwindCSS styles imported in this file
import animatedImageSrc from "../assets/about.png"; // Path to your image file

const AnimatedImage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 flex flex-col items-center">
        <div>
          <h1 className="text-4xl font-bold">Heading</h1>
          <p className="text-lg">Subheading</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center overflow-hidden">
        <img
          src={animatedImageSrc}
          alt="Animated Image"
          className="h-full animate-image"
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
