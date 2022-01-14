import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const HomeServices = () => {
  const [showData, setShowData] = useState(0);
  const levels = ["Develop", "Design", "Vendor Sourcing", "Sharetribe"];
  const description = [
    {
      header:
        "Our full-stack development team takes in your business requirements and builds the application that you envision by proper planning and implementation of the latest tools and technologies.",
      firstPoint: "A proper technology solution for your business",
      secondPoint:
        "A custom project plan that brings visibility into the progress of your project development",
      thirdPoint:
        "Deliver features on the basis of milestones and ensure quality",
    },
    {
      header:
        "A good design attracts users. Our design experts connect your business requirements to what you want your application to look like and create a design to make it happen.",
      firstPoint: "Design solutions catering to your business specs",
      secondPoint:
        "Create a feedback loop to adjust the design and satisfy your business needs",
      thirdPoint: "Ensure design matches the vision for your business",
    },
    {
      header:
        "We provide corporate technology solutions and skilled professionals by hiring the right candidate for your company's job opening, including short-term, long-term, and permanent roles. Our interview process ensures the right candidate is being sent in your pipeline.",
      firstPoint:
        "Our vendor sourcing solution will help you get the right candidate faster ",
      secondPoint: "Grow your team with motivated and well-versed candidates",
      thirdPoint: "Hire candidates on-site, on-shore and off-shore ",
    },
    {
      header:
        "We have a direct partnership with Sharetribe marketplace solution, expertise in both Sharetribe Go and Sharetribe Flex. You can choose to build your MVP marketplace with Go's feature set or a custom build solution with Flex. We can help build your dream project with sharetribe with full freedom to build web and mobile apps.",
      firstPoint: "Pre-build template for the fastest way to market ",
      secondPoint: "Custom build solutions provide an extensive feature set",
      thirdPoint: "Templates for both mobile and web apps",
    },
  ];
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex gap-6 md:gap-10 justify-center items-center">
          {levels.map((level, index) => {
            return (
              <div
                key={index}
                className={`py-2 sm:px-2 md:px-4 text-sm xs:text-base sm:text-xl md:text-xl 2xl:text-2xl font-medium group ${
                  showData === index
                    ? "border-b-4 border-primary text-primary"
                    : "border-b-4 border-gray-200 text-gray-600"
                } transition duration-300`}
              >
                <button
                  className="group-hover:scale-105 group-hover:ease-out duration-75 group-hover:text-primary"
                  onClick={() => setShowData(index)}
                >
                  {level}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {description.map((desc, index) => {
        return (
          showData === index && (
            <Fade key={index} big duration={1000}>
              <div className="flex flex-col mx-auto text-xs md:text-base px-8 md:px-40 lg:px-0 lg:w-620 justify-center items-center mt-10 text-gray-500">
                <p>{desc.header}</p>
                <ul className="mt-8 text-center list-disc mx-6 smd:px-20 md:px-0 lg:px-8  flex flex-col justify-center">
                  <li className="text-left">{desc.firstPoint}</li>
                  <li className="mt-5 text-left">{desc.secondPoint}</li>
                  <li className="mt-5 text-left">{desc.thirdPoint}</li>
                </ul>
              </div>
            </Fade>
          )
        );
      })}
      <div className="flex justify-center mx-auto mt-12">
        <Link href="/contact-us">
          <a className="bg-primary font-medium text-white px-6 py-3 text-base 2xl:text-xl text-center">
            Start Planning
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomeServices;
