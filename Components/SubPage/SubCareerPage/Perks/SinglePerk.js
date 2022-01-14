import React from "react";

const SinglePerk = ({ perkListData }) => {
  return (
    <div className="px-3 pb-6 py-3 lg:w-360 w-345 h-250 text-left cursor-pointer items-center flex justify-between bg-white transition duration-200 ease-in transform hover:shadow-xl shadow-md">
      <div className="smd:w-20 h-20 px-6 w-44 bg-green-50 flex items-center justify-center mx-auto rounded-full sm:mx-0 sm:flex-shrink-0 ">
        <img
          className="items-center overflow-hidden"
          src={perkListData.imgSrc}
          alt="flower"
        />
      </div>
      <div className="pl-3 py-4">
        <h2 className="text-left text-primary font-bold text-2xl">
          {perkListData.title}
        </h2>
        <h1 className="text-gray-600 text-m font-medium">
          {perkListData.data}
        </h1>
      </div>
    </div>
  );
};

export default SinglePerk;
