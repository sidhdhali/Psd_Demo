import React from "react";
import HeroImage from "./assets/HeroImage.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-12 lg:px-72 py-40 mb-12 bg-white text-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="lg:w-1/2 mr-10 ">
          <h1 className="text-5xl font-bold mb-8">
            Travel to your dream destination
          </h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
            amet nisi quis purus lacinia varius.
          </p>
          <button className="bg-gray-900 text-white font-bold py-2 px-8 rounded">
            Reserve Ticket
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 ml-10 lg:mt-6">
          <img src={HeroImage} alt="Hero" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
