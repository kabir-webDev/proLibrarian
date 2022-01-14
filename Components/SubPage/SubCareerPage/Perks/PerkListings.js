import React from "react";
import SinglePerk from "./SinglePerk";

const PerkListings = () => {
  const perkListingsData = [
    {
      id: 1,
      title: "Annual Tour",
      imgSrc: "Assets/009---Suitcase.svg",
      data: "We provide all our employee's travel tour benefits once a year.",
    },
    {
      id: 2,
      title: "Meals",
      imgSrc: "Assets/take-away.svg",
      data: "Meal benefits and Happy Hour every week in our office.",
    },
    {
      id: 3,
      title: "Flexible Times",
      imgSrc: "Assets/happy-hour.svg",
      data: "Flexible time working remotely. We understand flex-time situation and emergency circumstances.",
    },
    {
      id: 4,
      title: "Provident Fund",
      imgSrc: "Assets/XMLID_1017_.svg",
      data: "The employees' provident fund scheme extends an array of benefits towards the EPF employee members for Full Time employees.",
    },
    {
      id: 5,
      title: "Entertainment",
      imgSrc: "Assets/gamepad.svg",
      data: "Offer discounts and special offers for theme parks, attractions, shows, electronics, streaming services, health & wellness products, hotels, etc.",
    },
    {
      id: 6,
      title: "Learning Materials",
      imgSrc: "Assets/Page-1.svg",
      data: "Educational assistance, flexible work arrangements, paid time off, as well as a variety of discount programs in Udemy, LinkedIn.",
    },
  ];
  return (
    <div className="container my-10 mt-12 mb-16 md:mb-20 lg:mb-44 2xl:gap-10 3xl:gap-11 flex flex-wrap gap-6 items-center justify-center">
      {perkListingsData?.map((perkListData) => (
        <SinglePerk key={perkListData?.id} perkListData={perkListData} />
      ))}
    </div>
  );
};

export default PerkListings;
