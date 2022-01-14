import React from "react";
import ReactMarkDown from "react-markdown";
import Fade from "react-reveal/Fade";

const DevelopmentLifecycle = () => {
  const data = [
    {
      id: 1,
      title: "Planning",
      description:
        "The planning is the first stage in the web and mobile application development process and intended to determine project goals and establish a high-level plan. It is performed by the senior team of business analysts, technical architects and project managers together with all the business stakeholders and domain experts.\n\n1. Scope definition of the entire project\n\n2. Planning for the quality assurance requirements\n\n3. Definition of anticipated issues and opportunities\n\n4. Identify the risk involved\n\n5. Define timeline",
      image: "/Assets/software-development/Group 788.svg",
    },
    {
      id: 2,
      title: "Analysis",
      description:
        "Business requirement gathering is the most vital part of the Software Development Life Cycle. This phase includes business requirement analysis. Some of the primary activities involved in this phase are as follows:\n\n1. Gathering business requirements\n\n2. Create process diagram\n\n3. Perform detailed analysis\n\n4. Identify risks and concerns",
      image: "/Assets/software-development/Group 785.svg",
    },
    {
      id: 3,
      title: "Design",
      description:
        "During the design phase, the team makes software design decisions regarding the architecture, business rules, screen layouts and other necessary documents. Design includes the following steps -\n\n1. Designing the infrastructure\n\n2. Designing the user interface",
      image: "/Assets/software-development/Group 784.svg",
    },
    {
      id: 4,
      title: "Development",
      description:
        "Software development turns your project’s requirements into a tangible solution. This phase includes creating the software as per requirements and design specs from the previous step. Primary activities in this phase are as follows:\n\n1. Developing the infrastructure\n\n2. Development of database and code",
      image: "/Assets/software-development/Group 787.svg",
    },
    {
      id: 5,
      title: "Testing",
      description:
        "In this stage, every build is tested and validated as per requirements to ensure the quality of your software. Test engineers perform multiple layers of testing to find bugs in the system, prioritize them and have them fixed by the development team.\n\n1. Write test cases\n\n2. Execution of test cases\n\n3. Run automated tests",
      image: "/Assets/software-development/Group 786.svg",
    },
    {
      id: 6,
      title: "Deployment",
      description:
        "Application is deployed to real-life/production environment where business users can start to operate on the application. All the features and functionalities should be working as per requirements. This phase can also be called delivery.",
      image: "/Assets/software-development/planning (1).svg",
    },
    {
      id: 7,
      title: "Maintenance",
      description:
        "Any type of improvements, corrections and changes are implemented during this phase to ensure that the application continues to function and meet business objectives. It is necessary to maintain and continue to make improvements to have a competitive edge in the industry. Key services involved in the maintenance phase are as follows:\n\n1. Application maintenance\n\n2. Support application users\n\n3. Application changes and adjustment",
      image: "/Assets/software-development/optimize.svg",
    },
  ];

  return (
    <div className="antialiased">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-1 h-full bg-primary shadow-md inset-0 left-17 xs:left-10 md:mx-auto md:right-0 md:left-0"></div>

        {data.map((item, index) => {
          return (
            <div key={index} className="relative xs:flex items-center z-10">
              <Fade big duration={1000}>
                <div className="timeline-img">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-fit"
                  />
                </div>
              </Fade>
              {index % 2 === 0 ? (
                <Fade left duration={1000}>
                  {" "}
                  <div
                    className={`timeline-container ${
                      index % 2 === 0 && `timeline-container-left`
                    } group cursor-pointer duration-300 transition ease-out`}
                  >
                    <div
                      className={`timeline-pointer ${
                        index % 2 === 0 && `timeline-pointer-left`
                      }  group-hover:bg-primary`}
                      aria-hidden="true"
                    ></div>
                    <div className="bg-white p-6 rounded-sm shadow-2xl group-hover:bg-primary">
                      <h1 className="text-xl xl:text-2xl font-bold pt-1 group-hover:text-white">
                        {item.title}
                      </h1>
                      <ReactMarkDown className="prose text-xs xl:text-sm group-hover:text-white font-light pt-4">
                        {item.description}
                      </ReactMarkDown>
                    </div>
                  </div>{" "}
                </Fade>
              ) : (
                <Fade right duration={1000}>
                  <div
                    className={`timeline-container ${
                      index % 2 === 0 && `timeline-container-left`
                    } group cursor-pointer duration-300 transition ease-out`}
                  >
                    <div
                      className={`timeline-pointer ${
                        index % 2 === 0 && `timeline-pointer-left`
                      }  group-hover:bg-primary`}
                      aria-hidden="true"
                    ></div>
                    <div className="bg-white p-6 rounded-sm shadow-2xl group-hover:bg-primary">
                      <h1 className="text-xl xl:text-2xl font-bold pt-1 group-hover:text-white">
                        {item.title}
                      </h1>
                      <ReactMarkDown className="prose text-xs xl:text-sm group-hover:text-white font-light pt-4">
                        {item.description}
                      </ReactMarkDown>
                    </div>
                  </div>
                </Fade>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevelopmentLifecycle;
