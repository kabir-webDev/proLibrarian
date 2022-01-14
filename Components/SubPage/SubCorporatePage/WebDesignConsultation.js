import QualityCard from "../About-Us/QualityCard";

const WebDesignConsultation = () => {
  const data = [
    {
      iconLoc: "/Assets/web-design-svg/user.svg",
      title: "User Friendly",
      subTitle:
        "Algosolver will ensure that your site is a pleasure to use for your customers.",
    },
    {
      iconLoc: "/Assets/web-design-svg/refresh-page-option.svg",
      title: "Quick Update",
      subTitle:
        "Through the use of state-of-the-art CMS technology, you can update content instantly.",
    },
    {
      iconLoc: "/Assets/web-design-svg/progress-report-1.svg",
      title: "High Performance",
      subTitle: `Speed is everything online. Your site will perform at the highest levels.`,
    },
    {
      iconLoc: "/Assets/web-design-svg/lock.svg",
      title: "100% Secure",
      subTitle:
        "Sleep well at night knowing that your site is kept secure from bad actors.",
    },
    {
      iconLoc: "/Assets/web-design-svg/Settings-gears-icon-logo.svg",
      title: "Unlimited Featured",
      subTitle:
        "No matter your business needs, we can provide the features you expect.",
    },
    {
      iconLoc: "/Assets/web-design-svg/customer-service.svg",
      title: "24 X 7 Support",
      subTitle:
        "We will be available at any time to support the ongoing success of your site.",
    },
  ];
  return (
    <div className="mx-4 mt-20">
      <div className="mt-10">
        <div className="mx-4 smd:mx-14 lg:mx-36 xl:mx-48">
          <h1 className="uppercase text-center text-3xl xl:text-4xl font-bold ">
            <span className="text-primary">NEW YORK</span> WEB DESIGN
            CONSULTATION
          </h1>
          <p className="mt-6 text-center text-base text-gray-500 ">
            Algosolver will provide your New York-based company with a
            personalized experience. We will consult with you every step along
            the way to make sure that you can attain the goals that your
            organization needs and desires. By working closely with you, we will
            create designs that will present your company's goals and visions in
            the best possible light. We will help you feel confident at each
            stage of the process to ensure that your business needs are met.
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 justify-items-center content-center mt-10">
        <div className="flex flex-wrap justify-center items-center mt-10 gap-6 lg:gap-3 xl:gap-6 lg:col-span-1">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="px-4 py-2 lg:px-2 w-96 md:w-80 lg:w-56 lg:h-36 xl:w-64 2xl:w-72 3xl:w-80 shadow-sm hover:shadow-lg rounded transition duration-200  cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center px-4 py-4">
                    <img src={item.iconLoc} className="h-6 w-6" />
                  </div>
                  <div className="text-lg 2xl:text-xl font-bold">
                    {item.title}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">{item.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-1 hidden lg:flex items-center lg:mx-6">
          <img
            src="/Assets/web-design-svg/OKR0RO1.webp"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDesignConsultation;
