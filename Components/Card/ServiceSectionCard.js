import { GoChevronRight } from "react-icons/go";

const ServiceSectionCard = ({data}) => {
    return (
        <div className="pb-6 smd:w-80 md:w-353 xl:h-267 lg:w-406 xl:w-548 rounded-md my-2 mx-4 smd:mx-0 bg-white transition duration-200 ease-in transform hover:shadow-xl shadow-md">
            <div className="flex flex-row mt-4 md:mt-8 mx-2 justify-center gap-x-3">
                <div className="bg-blue-100 rounded-full w-14 h-14 lg:w-20 lg:h-20  flex flex-row items-center justify-center mt-1">
                    <img src={data?.icon} className="w-6 lg:w-10 m-4" />
                </div>
                <div className="flex flex-col w-3/4">
                    <div className="font-medium md:font-semibold mt-2 text-xl lg:text-2xl flex" >{data?.title} <GoChevronRight className="text-gray-400 ml-2 mt-1 lg:ml-10" /></div>
                    <div className="text-sm lg:text-base pr-8 my-4 text-gray-500">{data?.description}</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;