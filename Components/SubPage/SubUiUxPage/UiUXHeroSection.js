import React from "react";

const UiUXHeroSection = () => {
  return (
    <div
      className="w-full h-48 md:h-80 xl:h-96 flex flex-col justify-center items-center text-white px-10"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/Assets/about/hero.webp') center/cover no-repeat",
        gap: "1.5em",
      }}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Ui/Ux design
      </h1>
      <p className="text-center text-sm md:text-base">
        Over 10+ years of our professional in-house designers have been
        dedicated to sharpen their skill set and provide top quality designs for
        our clients.
      </p>
    </div>
  );
};

export default UiUXHeroSection;
