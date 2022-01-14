import { useState } from "react";
import TabCard from "./TabCard";

const ETabSection = () => {
  const levels = ["custom", "ux", "specialist"];
  const [active, setActive] = useState("custom");

  const dataList1 = {
    img: "/Assets/e-commerce/custom.svg",
    title: "CUSTOM ECOMMERCE DESIGN",
    description:
      "You want your eCommerce website to stand out from others. Individualized custom designs can make all the difference between making or losing a sale. Our expert team of designers will work to create a custom site which will provide you with a web shop that will meet your company's unique needs. No matter your product or service, we can create customized designs which will make it stand out from your competitors, and encourage your customers to make a purchase.",
  };

  const dataList2 = {
    img: "/Assets/e-commerce/ux.svg",
    title: "UX DESIGN FOR E-COMMERCE WEBSITES",
    description:
      "Let's face it, while it's easy for people to make purchases online, there is a lot of competition. One thing that can make a difference between a making or losing a sale is the quality of experience that a customer receives from an eCommerce Website. Algosolver provides expertise in creating a solid user experience (UX) for your customers to ensure that they enjoy shopping with you and bring you the ROI that your company deserves.",
  };

  const dataList3 = {
    img: "/Assets/e-commerce/ecom.svg",
    title: "E-COMMERCE WEB DESIGN SPECIALISTS",
    description:
      "Algosolver's eCommerce web design specialists are experts and combine aspects of UX, usability, design, and development to provide a top-notch shopping experience for your customers. Your eCommerce site will be designed in a way that brings together the best of all of these available options, to provide an excellent and effective online shopping location. We will work with you one-on-one to make sure that the designs we create match the overall mission and feel of your business.",
  };

  return (
    <>
      <div className=" w-full  mt-28">
        <div className="mx-4 md:mx-10 xl:mx-0 text-sm flex flex-col md:flex-row justify-center lg:text-base xl:text-lg text-center font-primary font-medium text-textColor">
          {levels.map((level, index) => {
            return (
              <div
                key={index}
                className={`2xl:w-1/4 cursor-pointer md:px-3 lg:px-10 py-5 smd:py-3 2xl:py-4 ${
                  active === level
                    ? "bg-primary text-white transition border duration-500 p-2"
                    : " border p-2"
                } transition duration-300`}
                onClick={() => setActive(level)}
              >
                <button className="group-hover:scale-105 group-hover:ease-out duration-75 group-hover:text-primary">
                  {level === "custom"
                    ? "CUSTOM ECOMMERCE DESIGN"
                    : level === "ux"
                    ? "UX DESIGN FOR E-COMMERCE WEBSITES"
                    : level === "specialist"
                    ? "E-COMMERCE WEB DESIGN SPECIALISTS"
                    : ""}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <TabCard
        data={
          active == "custom"
            ? dataList1
            : active === "ux"
            ? dataList2
            : active === "specialist"
            ? dataList3
            : ""
        }
      />
    </>
  );
};

export default ETabSection;
