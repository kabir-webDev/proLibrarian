const WebDesignPart = () => {
  const data = [
    {
      icon: "/Assets/web-design-svg/browsing.svg",
      title: "New York Web Development",
      description:
        "We are a state of the art web development team serving clients in New York",
    },
    {
      icon: "/Assets/web-design-svg/briefcase.svg",
      title: "Mobile Responsive Web Design",
      description:
        "We design sites to be easily accessible no matter what platform or device used.",
    },
    {
      icon: "/Assets/web-design-svg/marketing.svg",
      title: "Custom Web Design New York",
      description: `No matter your business size, we provide custom quality content to meet your organization’s needs.`,
    },
    {
      icon: "/Assets/web-design-svg/diploma.svg",
      title: "New York Web Solutions",
      description:
        "Algosolver will provide the highest quality web solutions for your New York-based company.",
    },
  ];
  return (
    <div className="mt-20">
      <div className="mx-4 smd:mx-14 lg:mx-36 xl:mx-48">
        <h1 className="uppercase text-center text-3xl xl:text-4xl font-bold ">
          PROFESSIONAL{" "}
          <span className="text-primary">AlGOSOlVER WEB DESIGN</span>
          <br /> FOR YOUR BUSINESS
        </h1>
        <p className="mt-6 text-center text-base text-gray-500 ">
          Your website is your company's public face on the internet. You need
          to have a site that both projects professionalism, while at the same
          time is easy to use for your current and potential customers.
          Algosolver will provide you with the highest quality professional web
          design in Toronto to make your business stand out. Our top-notch
          designers and developers will provide you exactly what you need to be
          able to compete online.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-7 justify-items-center content-center">
        <div className="lg:col-span-4 hidden lg:flex items-center lg:mx-6">
          <img
            src="/Assets/web-design-svg/first.webp"
            className="w-full object-cover"
          />
        </div>
        <div className="lg:col-span-3">
          <div className="flex flex-wrap justify-center mt-10 gap-6 lg:gap-3 xl:gap-6">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-6 md:h-80 w-548 md:w-80 lg:w-52 xl:w-58 2xl:w-64 3xl:w-80 rounded-md my-2 mx-4 smd:mx-0 bg-white transition duration-400 ease-in transform group-hover:shadow-xl shadow-md xp-4 pt-2 cursor-pointer md:hover:border-b-4 border-primary group web-design-card-hover"
                >
                  <div className="flex justify-center">
                    <div
                      className="bg-white shadow-xl rounded-full w-28 h-28 flex flex-row items-center justify-center group-hover:bg-primary
                                        "
                    >
                      <img src={item?.icon} className="m-6 " />
                    </div>
                  </div>
                  <h2 className="py-4 px-2 text-xl lg:text-lg 3xl:text-2xl font-bold text-center group-hover:text-primary">
                    {item.title}
                  </h2>
                  <p className="text-center text-sm 3xl:text-base px-2 pt-2 text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignPart;
