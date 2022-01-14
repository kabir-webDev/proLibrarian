import LargeView from "./LargeView";
import MobileView from "./MobileView";
import React from "react";
const JobsContentHolder = ({ data }) => {
  const [limit, setLimit] = React.useState(5);
  const handleLimitToggle = () =>
    limit === 5 ? setLimit(data?.length) : setLimit(5);
  return (
    <div className="lg:mt-14 w-full tracking-wider">
      <div
        className="flex flex-col w-full gap-5 justify-center items-center h-auto pb-20"
        style={{
          backgroundColor: "#eff8ff",
        }}
      >
        <div className="flex items-center justify-center flex-col gap-2 p-10">
          <p
            className="font-bold text-sm md:text-base uppercase"
            style={{
              color: "#0e497b",
              lineHeight: "3rem",
            }}
          >
            OUR CURRENT OPENINGS
          </p>
          <p className="font-bold text-center text-xl px-12 md:text-3xl md:px-24 lg:text-4xl lg:px-32 leading-7 lg:leading-10 xl:leading-normal xl:px-40 tracking-wider">
            Join Our Awesome Team. Build And Grow Your Career With Us!
          </p>
          <p className="text-center text-xs md:text-base lg:text-lg px-2 font-semibold xl:px-16 3xl:px-60">
            If you think you are passionate about your job, dedicated, problem
            solving is your thing and by constant challenge you want to grow,
            You are the one we are looking for.
          </p>
        </div>
      </div>
      <LargeView data={data} limit={limit} />
      <MobileView data={data} limit={limit} />
      {data.length === 0 && (
        <div
          style={{
            transform: "translateY(-4rem)",
          }}
          className="container flex-col flex-wrap items-center justify-center tracking-wide flex text-xs lg:text-sm xl:text-base bg-green-200 p-3 font-bold"
        >
          No openings are available for now.Please keep an eye out for more
          updates.
        </div>
      )}
      <div className={`flex mt-2 mb-2 xl:mb-6 items-center justify-center`}>
        {data?.length > 5 && (
          <button
            style={{ backgroundColor: "#0e497b" }}
            onClick={handleLimitToggle}
            className="lg:text-xl lg:px-16 lg:py-5 px-12 py-4 mb-4 rounded-sm text-xs text-white"
          >
            {limit === 5 ? "See All" : "See Less"}
          </button>
        )}
      </div>
    </div>
  );
};
export default JobsContentHolder;
