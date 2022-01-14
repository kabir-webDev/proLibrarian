import React from "react";
const SubSimpleSolution = () => {
  const bullets = [
    "Digital Marketing",
    "Website Development",
    "SEO Specialist",
  ];
  return (
    <div className="lg:flex flex-col lg:flex-row items-center justify-center gap-6 my-10 xl:my-20 container">
      <div className="w-full lg:w-1/2 flex flex-col justify-center pl-2 mt-6 md:mt-0 md:pl-6 lg:pl-10 pr-4">
        <h1 className="font-black text-2xl xl:text-5xl lg:text-2xl mt-5">
          We like to find simple solutions to complex challenges.
        </h1>
        <h3 className="font-bold text-sm xl:text-xl uppercase mt-5 xl:mt-10 text-gray-600">
          You need offer an experience that is not available elsewhere. Clean
          and creative HTMl template design for you.
        </h3>
        <p className="text-xs lg:text-sm xl:text-base mt-3 xl:mt-6 xl:leading-6">
          Software can be tricky - but that's what we're here for. Custom
          software built from scratch to boost your business functionality.
        </p>
        <div className="text-xs lg:text-sm xl:text-base flex flex-col mt-6 xl:mt-8">
          {bullets.map((obj, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-row items-center mb-3 xl:mb-4">
                <div className="rounded-full flex justify-center bg-blue-300">
                  <img
                    className="m-2"
                    src="/Assets/software-development/Path 3.svg"
                  />
                </div>
                <div className="mr-2 inline-block h-2 w-2 rounded-full"></div>
                {obj}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2">
        <img
          className="h-263 md:h-346 xl:h-519 3xl:h-719 w-auto"
          src="/Assets/software-development/Rectangle 367.webp"
        />
      </div>
    </div>
  );
};

export default SubSimpleSolution;
