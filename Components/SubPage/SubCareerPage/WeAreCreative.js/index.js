import React from "react";

const WeAreCreative = () => {
  const bullets = [
    "Mobile & Web designing",
    "Mobile & Web Development",
    "Digital Marketing Services",
  ];
  return (
    <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-6 my-20 px-10 py-8 p-6 container">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <img className="h-263 md:h-346 xl:h-417 w-auto" src="Assets/we.webp" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center pl-2 mt-6 md:mt-0 md:pl-6 lg:pl-10 pr-4">
        <h3
          className="font-bold text-sm uppercase"
          style={{
            color: "#0e497b",
          }}
        >
          {" "}
          Join us
        </h3>
        <h1 className="font-bold text-lg xl:text-3xl lg:text-2xl mt-5">
          {" "}
          We Are A Software Development And Stuffing Agency Based In New York.
        </h1>
        <p className="text-xs lg:text-sm xl:text-base mt-5">
          We hire top talents around the world to work on enterprise-level
          project development as well as provide resources for corporate
          technology teams.
        </p>
        <ul className="text-xs lg:text-sm xl:text-base flex flex-col mt-5">
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
      </div>
    </div>
  );
};
export default WeAreCreative;
