const OurServices = () => {
  const data = [
    {
      iconLoc: "/Assets/web-design-svg/user.svg",
      title: "User Friendly",
      subTitle:
        "Algosolver ensures that the process of migrating your site will be easy and painless.",
    },
    {
      iconLoc: "/Assets/web-design-svg/refresh-page-option.svg",
      title: "Quick Update",
      subTitle:
        "The update process of your migration will be fast, and will be almost unnoticeable.",
    },
    {
      iconLoc: "/Assets/web-design-svg/progress-report-1.svg",
      title: "High Performance",
      subTitle: `Your new site will perform at the same or greater level than prior to the migration.`,
    },
    {
      iconLoc: "/Assets/web-design-svg/lock.svg",
      title: "100% Secure",
      subTitle:
        "There will be no risk to you or your customers at all throughout the entire migration procedure.",
    },
    {
      iconLoc: "/Assets/web-design-svg/Settings-gears-icon-logo.svg",
      title: "Unlimited Featured",
      subTitle:
        "Your new WordPress site will now have access to an almost unlimited set of new features.",
    },
    {
      iconLoc: "/Assets/web-design-svg/customer-service.svg",
      title: "24 X 7 Support",
      subTitle:
        "At any point in the process, we will be available for any support needs.",
    },
  ];
  return (
    <div className="mx-4 mt-20">
      <div className="mt-10">
        <div className="mx-4 smd:mx-14 lg:mx-36 xl:mx-48">
          <div>
            <h1 className="uppercase text-center mb-8  ">
              <span className="text-primary text-sm font-bold tracking-widest">
                OUR SERVICES
              </span>
            </h1>
          </div>
          <h1 className="uppercase text-center text-2xl md:text-3xl xl:text-5xl font-bold tracking-widest">
            <span className="text-primary">WHAT WE </span> WILL ENSURE
          </h1>
          <p className="mt-6 text-center text-base text-gray-500 leading-8 tracking-widest">
            No matter the nature of your web migration, be it a move between
            domains, between platforms or a simple migration from a local server
            to a web host, Algosolver will ensure that the process is handled
            quickly, ensure that your site continues to perform at a high level,
            is completely secure, and the process will feel seamless to you as a
            client. You can rest assured that there will be no disruptions in
            your service.
          </p>
        </div>
      </div>
      <div className="lg:grid justify-items-center content-center mt-10">
        <div className="flex flex-wrap justify-center items-center mt-10 gap-6 lg:gap-3 xl:gap-6 lg:col-span-1">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" px-4 py-2 lg:px-2 w-5/6 md:w-2/6  shadow-sm hover:shadow-lg rounded transition duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-center smd:justify-start">
                  <div className="flex items-center justify-center pr-4 py-4">
                    <img src={item.iconLoc} className="h-6 w-6" />
                  </div>
                  <div className="text-lg 2xl:text-xl font-bold">
                    {item.title}
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-center smd:text-left text-gray-400">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
