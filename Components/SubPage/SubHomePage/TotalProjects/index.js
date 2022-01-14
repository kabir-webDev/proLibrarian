import React from "react";
import AmountCard from "./AmountCard";
import FindUs from "./FindUs";

const TotalProjects = () => {
  return (
    <React.Fragment>
      <div className="text-center flex flex-col md:gap-5 justify-center items-center mt-16 xl:mt-20 mb-12 px-10">
          <h1
            className="font-normal 2xl:font-medium text-lg xl:text-xl 3xl:text-3xl mt-0 md:mt-10"
            style={{
              color: "#0e497b",
            }}>
            Us by numbers
          </h1>
          <h1 className=" font-normal 2xl:font-medium text-lg md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl text-center mt-4 mb-0 md:mb-6" 
          style={{
              color: "#222a41",
            }}>
          Remember to celebrate, for road ahead</h1>
        </div>
      <div className=" 2xl:px-60">
        <div className="flex justify-around gap-4 px-6 flex-wrap my-9 ">
        <AmountCard
          title={"Global Customers"}
          amount={"12k"}
        />
        <AmountCard
          title={"Complete Projects"}
          amount={"180"}
        />
        <AmountCard
          title={"Expert Workers"}
          amount={"300"}
        />
        </div>
        <div className=" lg:px-7 xl:px-12 2xl:px-5">
          <FindUs/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TotalProjects;

