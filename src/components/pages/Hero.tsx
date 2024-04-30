import React from "react";
import logo from "../../assets/Image.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="flex flex-col items-start w-1/2 px-20">
        <p className="font-bold text-4xl">
          Perfect Match: Book Rooms, Find Roommates, Get Last Minute Deals with
          Ease!
        </p>
        <p className="text-xl pt-6">
          An all-in-one platform that helps you to find what you needed.
        </p>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img src={logo} className="rounded" />
      </div>
    </div>
  );
};

export default Hero;
