import moment from "moment";
import Link from "next/link";
import { MdAccessTimeFilled, MdDateRange } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
const EachMobileCard = ({ data: jobData }) => {
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
      <a className="flex flex-col p-4 py-6 border text-dark bg-white w-5/6 mb-2 gap-2 ">
        <h2 className="text-base font-bold">{jobData?.title}</h2>
        <h6 className="text-sm">
          <b>Vacancy(s): </b>
          {jobData.vacancy}
        </h6>

        <h3 className="text-sm flex flex-row items-center">
          <b>Deadline: </b>
          &nbsp;
          {formattedDate(jobData?.deadline)}
          &nbsp; &nbsp;
          <MdDateRange className="text-base" />
        </h3>
        <h3 className="text-sm flex flex-row items-center">
          <MdAccessTimeFilled className="text-base" />
          &nbsp;
          {daysRemaining(jobData?.deadline)} days left
        </h3>
        <div className="flex flex-row justify-center items-center mt-1">
          <button
            className="w-auto p-3 rounded-sm flex text-sm shadow-md text-white items-center"
            style={{ backgroundColor: "#0e497b" }}>
            View Details &nbsp;
            <span>
            <BsArrowRightShort />
            </span>
          </button>
        </div>
      </a>
    </Link>
  );
};
export default EachMobileCard;
