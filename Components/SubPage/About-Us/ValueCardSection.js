import React from "react";
import ValueCard from "./ValueCard";
const ValueCardSection = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col container gap-5 justify-center items-center px-10">
        <h1
          className="font-bold text-sm md:text-base uppercase"
          style={{
            color: "#0e497b",
          }}
        >
          why choose us
        </h1>
        <h1 className="font-bold text-2xl md:text-4xl">Our Business Value</h1>
        <p className="text-center text-xs md:text-base px-8">
          We put a strong focus on the needs of your business to figure out
          solutions that best fits your demand and nail it. Also our support
          team is available 24/7 a day, 7 days a week and can get ready for
          solving any of your situational rising problems.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap my-7 container xl:px-40">
        <ValueCard
          title={"10 Years Experience"}
          subTitle={
            "We have years of experience in providing software solutions for our clients."
          }
          isInverted={true}
          iconLoc={"Assets/about/10yrs.svg"}
        />
        <ValueCard
          title={"Awards Achievement"}
          subTitle={
            "Over the last few years, we have achieved so many things and the list is getting bigger day by day. "
          }
          isInverted={false}
          iconLoc={"Assets/about/award.svg"}
        />
        <ValueCard
          title={"Money Back Guarantee"}
          subTitle={
            "We care for your business as much as you do. In fact, if for any reason you're not completely satisfied, we give a money back guarantee. "
          }
          isInverted={true}
          iconLoc={"Assets/about/money.svg"}
        />

        <ValueCard
          title={"Fast & Perfect Work"}
          subTitle={
            "We offer project analysis, engineering, quality control and try to figure out the best possible way to give our client high quality services. "
          }
          isInverted={false}
          iconLoc={"Assets/about/fast.svg"}
        />
        <ValueCard
          title={"Solid Team Work"}
          subTitle={"We believe in growing as a team. "}
          isInverted={true}
          iconLoc={"Assets/about/solid-teams.svg"}
        />
        <ValueCard
          title={"Best Client Says"}
          subTitle={
            "Thanks for providing fast, efficient, and high performant product. Delivered in time. "
          }
          isInverted={false}
          iconLoc={"Assets/about/says.svg"}
        />
      </div>
    </React.Fragment>
  );
};

export default ValueCardSection;
