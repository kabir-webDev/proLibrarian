import React from "react";
import ApplyInformationSection from "../ApplyInformation";
import ReactMarkDown from "react-markdown";

const JobSummery = ({ details: data }) => {
  const {
    summary,
    location,
    jobType,
    workingHours,
    workingDays,
    salary,
    vacancy,
    responsibilities,
    requirements,
    niceToHave,
    experience,
    additional,
  } = data.attributes;
  const [open, setOpen] = React.useState(false);
  const jobSummeryData = [
    {
      title: "location",
      value: location,
      icon: "/Assets/job description/ios-location.svg",
    },
    {
      title: "Job Type",
      value: jobType,
      icon: "/Assets/job description/briefcase-fill.svg",
    },
    {
      title: "Experience",
      value: experience,
      icon: "/Assets/job description/document-sharp.svg",
    },
    {
      title: "Working Hours",
      value: workingHours,
      icon: "/Assets/job description/clock-fill.svg",
    },
    {
      title: "Working days",
      value: workingDays,
      icon: "/Assets/job description/calendar.svg",
    },
    {
      title: "Salary",
      value: salary,
      icon: "/Assets/job description/cash.svg",
    },
    {
      title: "Vacancy",
      value: vacancy,
      icon: "",
    },
  ];

  return (
    <div className="mx-2 xs:mx-4 md:mx-10 xl:mx-44 3xl:mx-72 my-6">
      <div className="border-2 border-gray-200 px-2 md:px-10">
        <h1 className="text-xl md:text-2xl 3xl:text-3xl font-medium py-4">
          Job Summary
        </h1>
        <p className="text-xs sm:text-sm xl:text-base text-gray-500">
          {summary}
        </p>
        <div className="flex flex-wrap py-4">
          {jobSummeryData.map((item, index) => {
            return (
              <div
                className="w-1/2 smd:w-1/3 lg:w-1/4 py-2 flex flex-wrap"
                key={index}
              >
                {item?.icon && (
                  <div
                    className={`${
                      item?.icon
                        ? "flex items-center justify-center bg-blue-100 rounded-full w-7 h-7 md:w-9 md:h-9 2x:w-13 2xl:h-13 mr-2 mt-2"
                        : " "
                    }`}
                  >
                    <img
                      src={item?.icon}
                      className={`${
                        item.icon
                          ? "w-3 h-3 md:w-4 md:h-4 2xl:w-5 2xl:h-5"
                          : " "
                      }`}
                      alt=""
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-400">
                    {item?.title}
                  </p>
                  <p className="text-sm sm:text-base lg:text-xl font-medium">
                    {item?.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {responsibilities && (
        <div className="flex my-6 items-center">
          <h1 className="text-xl xl:text-2xl 3xl:text-3xl font-medium">
            Job Responsibilities
          </h1>
          <div
            style={{
              borderTop: "3px solid #0e497b",
              flexGrow: 1,
              margin: "0 0 0 10px",
            }}
          ></div>
        </div>
      )}
      {responsibilities && (
        <ReactMarkDown
          className="prose prose:xl text-sm xl:text-base 3xl:text-lg font-normal py-1 xl:w-779 3xl:w-1071"
          style={{ color: "#242426" }}
        >
          {responsibilities}
        </ReactMarkDown>
      )}
      {requirements && (
        <div className="flex my-6 items-center">
          <h1 className="text-xl xl:text-2xl 3xl:text-3xl font-medium">
            Job Requirements
          </h1>
          <div
            style={{
              borderTop: "3px solid #0e497b",
              flexGrow: 1,
              margin: "0 0 0 10px",
            }}
          ></div>
        </div>
      )}
      {requirements && (
        <ReactMarkDown
          className="prose prose:xl text-sm xl:text-base 3xl:text-lg font-normal py-1 xl:w-779 3xl:w-1071"
          style={{ color: "#242426" }}
        >
          {requirements}
        </ReactMarkDown>
      )}
      {niceToHave && (
        <div className="flex my-6 items-center">
          <h1 className="text-xl xl:text-2xl 3xl:text-3xl font-medium">
            Nice To Have
          </h1>
          <div
            style={{
              borderTop: "3px solid #0e497b",
              flexGrow: 1,
              margin: "0 0 0 10px",
            }}
          ></div>
        </div>
      )}
      {niceToHave && (
        <ReactMarkDown
          className="prose prose:xl text-sm xl:text-base 3xl:text-lg font-normal py-1 xl:w-779 3xl:w-1071"
          style={{ color: "#242426" }}
        >
          {niceToHave}
        </ReactMarkDown>
      )}
      {additional && (
        <div className="flex my-6 items-center">
          <h1 className="text-xl xl:text-2xl 3xl:text-3xl font-medium">
            Additional Information
          </h1>
          <div
            style={{
              borderTop: "3px solid #0e497b",
              flexGrow: 1,
              margin: "0 0 0 10px",
            }}
          ></div>
        </div>
      )}
      {additional && (
        <ReactMarkDown
          className="prose prose:xl text-sm xl:text-base 3xl:text-lg font-normal py-1 xl:w-779 3xl:w-1071"
          style={{ color: "#242426" }}
        >
          {additional}
        </ReactMarkDown>
      )}
      {!open && (
        <div className="flex justify-center mx-auto mt-10">
          <button
            onClick={() => setOpen(true)}
            className="bg-primary px-10 xl:px-74 2xl:px-20 py-2 xl:py-3 3xl:py-5 text-white font-normal text-base xl:text-xl 3xl:text-2xl flex justify-center"
          >
            Apply Now
          </button>
        </div>
      )}
      {open && <ApplyInformationSection handleBack={() => setOpen(false)} />}
    </div>
  );
};

export default JobSummery;
