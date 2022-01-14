const Eplatform = () => {
  const content =
    "Bringing your business online can be a bit tricky. There are many different online platforms for selling your products. You have options for choosing simple cookie-cutter eCommerce platforms, or you may wish to be able to develop a more customized experience for your customers. Don’t make the mistake of just picking one without examining the wide range of options available. Algosolver can help you navigate these waters to choose the platform that works best for your online business.";

  const data = [
    {
      icon: "/Assets/web-design-svg/browsing.svg",
      title: "Freedom of a freelancer",
      description:
        "Enable every aspect of your business to work remotely or on premise if necessary.",
    },
    {
      icon: "/Assets/web-design-svg/briefcase.svg",
      title: "Concentrate on your professional activities",
      description:
        "Spend less time worrying about keeping your servers running, and more time on actual business.",
    },
    {
      icon: "/Assets/web-design-svg/marketing.svg",
      title: "Flexible made to measure and fast",
      description: `Enable your business to scale up and down whenever needed at lightning speed.

      `,
    },
    {
      icon: "/Assets/web-design-svg/diploma.svg",
      title: "Guaranteed compliance with swiss legislation",
      description:
        "Algosolver provides fully encrypted cloud security to protect your business and customers’ sensitive data.",
    },
  ];

  return (
    <div className="mx-10 mt-16 ">
      <div className="text-center 2xl:px-60 mt-8">
        <h1 className="uppercase leading-normal 2xl:leading-relaxed lg:mx-20 text-center text-4xl 2xl:text-5xl font-bold tracking-widest">
          <span className="text-primary ">HOW TO CHOOSE THE BEST </span>{" "}
          ECOMMERCE PLATFORM
        </h1>
        <h1 className="text-lg xl:mx-28 2xl:mx-32 lg:px-5 2xl:px-20 mt-5 tracking-widest text-gray-500">
          {content}
        </h1>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-wrap justify-center mt-10 gap-6 ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" py-6 md:h-80 lg:h-405 xl:h-324 w-full md:w-80 lg:w-52 xl:w-279 2xl:w-315 3xl:w-96 rounded-md my-2 bg-white transition duration-400 ease-in transform group-hover:shadow-xl shadow-md xp-4 pt-2 cursor-pointer md:hover:border-b-4 border-primary group web-design-card-hover"
              >
                <div className="flex justify-center">
                  <div
                    className=" bg-white shadow-xl rounded-full w-28 h-28 flex flex-row items-center justify-center group-hover:bg-primary
                                          "
                  >
                    <img src={item?.icon} className="p-6 " />
                  </div>
                </div>
                <h2 className="tracking-widest lg:tracking-wider  py-4 px-7 text-lg xl:text-xl 3xl:text-xl font-bold text-center group-hover:text-primary">
                  {item.title}
                </h2>
                <p className="tracking-widest lg:tracking-wider text-center text-sm 3xl:text-base px-7 pt-2 text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Eplatform;
