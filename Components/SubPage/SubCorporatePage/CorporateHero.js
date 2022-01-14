import React from 'react';

const CorporateHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-center  text-h z-10 text-white self-center font-medium text-2xl md:text-4xl xl:text-5xl 3xl:text-6xl ">
          Corporate Web Design
        </div>
      </div>
      <img
        src="/ourProjectBanner.webp"
        alt="hero image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CorporateHero;