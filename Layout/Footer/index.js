import React from "react";
import Link from "next/link";
const Footer = () => {
  const pages = [
    {
      service: "Services",
      options: [
        {
          title: "Corporate Web Design",
          link: "/corporate-web-design",
        },
        {
          title: "E-commerce Web Design Service",
          link: "/e-commerce",
        },
        {
          title: "Web migration services",
          link: "/migration",
        },
        {
          title: "SEO Service",
          link: "/seo-service",
        },
      ],
    },
    {
      service: "Help & Advice",
      options: [
        {
          title: "Privacy Policy",
          link: "/policies?tab=privacy",
        },
        {
          title: "FAQ",
          link: "/policies?tab=faq",
        },
        {
          title: "Terms & Conditions",
          link: "/policies?tab=terms",
        },
        {
          title: "Cookie Policy",
          link: "/policies?tab=cookies",
        },
      ],
    },
    {
      service: "Company",
      options: [
        {
          title: "About us",
          link: "/about",
        },
        {
          title: "Recent Works",
          link: "/our-projects",
        },
        {
          title: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Career",
          link: "/career",
        },
      ],
    },
  ];
  const icons = [
    {
      src: "/Assets/footer/fb.svg",
      link: "https://www.facebook.com/algosolver.LLC",
    },
    {
      src: "/Assets/footer/instagram.svg",
      link: "https://www.instagram.com/algosolver.llc/",
    },
    {
      src: "/Assets/footer/linkedin.svg",
      link: "https://www.linkedin.com/company/algo-solver",
    },
    {
      src: "/Assets/footer/twitter.svg",
      link: "https://twitter.com/AlgoSolverLLC",
    },
  ];
  return (
    <React.Fragment>
      <div
        className="flex flex-row flex-wrap gap-2 px-0 justify-between md:px-6 md:gap-7 md:flex-nowrap lg:flex-wrap lg:gap-12 pt-5 lg:px-12 lg:pt-12 xl:gap-24 md:justify-evenly text-white"
        style={{
          backgroundColor: "#002a4e",
        }}
      >
        <div className="w-48 xl:w-56 flex flex-col gap-3 mt-2 mb-2 px-6 md:px-0">
          <img src="/Assets/footer/logo-white.svg" className="w-28 xl:w-36" />
          <p className="text-xs lg:text-base text-gray-400">
            You have the vision for a stunning digital experience.We're the
            software design and engineering team that can bring it for life
          </p>
          <div className="flex flex-row mt-5 lg:mt-10">
            {icons.map((obj, index) => {
              return (
                <a key={index} href={obj.link} target="__blank">
                  <img
                    src={obj.src}
                    className="h-5 w-5 mr-3 xl:h-7 xl:w-7 xl:mr-5 cursor-pointer hover:scale-125 duration-100"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <React.Fragment>
          {pages.map((obj, index) => (
            <div
              className="w-48 xl:w-56 flex flex-col gap-3 mt-2 px-6 md:px-0 text-white"
              key={index}
            >
              <h1 className="font-semibold text-base lg:text-xl xl:text-2xl mb-1">
                {obj.service}
              </h1>
              {obj.options.map((el, i) => {
                return (
                  <Link href={el.link} key={i}>
                    <a className="mb-2 md:mb-4 text-xs lg:text-base text-white cursor-pointer hover:underline">
                      {el.title}
                    </a>
                  </Link>
                );
              })}
              <div className="flex flex-row gap-3"></div>
            </div>
          ))}
        </React.Fragment>
      </div>
      <div
        className="flex items-center justify-center text-sm font-bold text-white pb-2 lg:text-lg pt-2"
        style={{
          backgroundColor: "#002a4e",
        }}
      >
        <p>Copyright &nbsp;&nbsp;&copy;&nbsp;&nbsp;2022&nbsp;Algosolver LLC</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
