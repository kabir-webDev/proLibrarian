import moment from "moment";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const EachJobLargeCard = ({ data: jobData }) => {
  const daysRemaining = (eventDate) => {
    const eventDateMoment = moment(eventDate);
    const todayDateMoment = moment();
    return eventDateMoment.diff(todayDateMoment, "days");
  };

  const formattedDate = (date) => {
    return moment(date).format("DD MMM, YYYY");
  };
  return (
    <Link href={`/job-description/${jobData?.id}`}>
      <a className="grid grid-cols-12 p-7 border text-dark bg-white w-5/6 mb-3 hover:bg-gray-100">
        <h2 className="flex col-span-3 lg:text-lg font-bold leading-6 uppercase mr-4 text-base lg:mr-8 xl:mr-10 xl:text-xl flex-col items-center justify-center">
          {jobData?.title}
        </h2>
        <div className="col-span-2 flex flex-col justify-start">
          <h5 className="text-sm">Vacancy</h5>
          <h3 className="text-lg lg:text-xl font-bold">{jobData?.vacancy}</h3>
        </div>
        <div className="col-span-3 flex justify-start flex-col">
          <h5 className="text-sm">Job Type</h5>
          <h3 className="text-lg lg:text-xl font-bold">{jobData?.type}</h3>
        </div>
        <div className="col-span-3 flex justify-start flex-col">
          <h5 className="text-sm">Deadline</h5>
          <h3 className="text-lg lg:text-xl font-bold">
            {formattedDate(jobData?.deadline)}
            <span className="ml-2 font-normal text-sm">
              {daysRemaining(jobData?.deadline)} days left
            </span>
          </h3>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <IoIosArrowDroprightCircle className="w-8 h-8 hover:scale-125 duration-300" fill={"#0e497b"} />
        </div>
      </a>
    </Link>
  );
};
export default EachJobLargeCard;
