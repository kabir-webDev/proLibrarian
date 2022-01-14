import React from "react";

const DesignMethod = () => {
  const data = [
    {
      iconLoc: "/Assets/ui-ux_page/Group 21.svg",
      title: "Research",
      subTitle:
        "We prioritize your business goals. We do research accordingly about what you are trying to achieve in the long run.",
    },
    {
      iconLoc: "/Assets/ui-ux_page/Group 25.svg",
      title: "Design",
      subTitle:
        "To stand out from the crowd, you need style. We offer custom UI design to fit your needs and impress your clientele.",
    },
    {
      iconLoc: "/Assets/ui-ux_page/Group 15.svg",
      title: "Implementation",
      subTitle: `After researching the market and creating the design, we implement it in the most efficient manner.`,
    },
  ];
  return (
    <div className="my-10 container">
      <h1
        className="text-center font-bold text-2xl xl:text-4xl 3xl:text-5xl"
        style={{ color: "rgba(0, 0, 0, 0.74)" }}
      >
        Design Method to
        <br /> solve the problem
      </h1>
      <div className="flex flex-wrap justify-center items-center mt-10 gap-6 xl:gap-x-20">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`px-4 py-2 lg:px-2 w-96 md:w-80 lg:w-56 xl:w-64 2xl:w-72 3xl:w-80 ${
                index === 1 && "lg:mt-8 xl:mt-24"
              } ${index === 2 && "lg:mt-16 xl:mt-48"}`}
            >
              <div className="mx-auto md:mx-0 w-28 h-28 xl:w-44 xl:h-40">
                <img
                  src={item.iconLoc}
                  alt="icon"
                  className="w-full h-full objectFit"
                />
              </div>
              <h3 className="text-xl font-bold mt-8 text-center md:text-left">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-4 text-center md:text-left">
                {item.subTitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignMethod;
