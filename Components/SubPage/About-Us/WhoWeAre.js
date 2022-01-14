import Link from "next/link";
import React from "react";

const WhoWeAre = ({ videoUrl }) => {
  const bullets = [
    "Mobile & Web designing",
    "Mobile & Web Development",
    "Digital Marketing Services",
  ];
  return (
    <div
      className="w-full flex flex-col xl:flex-row justify-center gap-6 flex-wrap my-20 py-8 p-6"
      style={{
        backgroundColor: "#fffaee",
      }}
    >
      <div className="w-full xl:w-1/2 flex flex-col">
        <h3
          className="font-bold text-sm ml-6 mb-3 mt-3 uppercase"
          style={{
            color: "#0e497b",
          }}
        >
          {" "}
          WHO WE ARE
        </h3>
        <h1 className="font-bold text-2xl md:text-3xl ml-6 mb-3 mr-10 mt-3 xl:mr-44 md:mr-32">
          {" "}
          We Are A Software Development And Stuffing Agency Based In New York.
        </h1>
        <p className="text-sm md:text-base ml-6 mb-3 mr-10 mt-3 xl:mr-72 md:mr-5">
          We hire top talents around the world to work on enterprise-level
          project development as well as provide resources for corporate
          technology teams.
        </p>
        <ul className="text-sm md:text-base ml-6 mb-3 mr-10 mt-3 xl:mr-72 md:mr-5 flex flex-col">
          {bullets.map((obj, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-row items-center mb-4">
                <span
                  style={{ backgroundColor: "#e5a518" }}
                  className="mr-2 inline-block h-2 w-2 rounded-full"
                ></span>
                &nbsp;
                {obj}
              </div>
            </React.Fragment>
          ))}
        </ul>
        <div className="flex gap-5 ml-6 mb-3 mt-3 mr-3">
          <Link href="/contact-us">
            <button
              type="submit"
              className="w-auto px-5 py-4 md:px-6 md:py-5 rounded-md font-bold text-white text-sm md:text-base"
              style={{
                backgroundColor: "#e5a518",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <iframe
        controls
        className="w-full xl:w-2/5 h-346 md:h-519 xl:h-auto cursor-pointer"
        src={videoUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WhoWeAre;
