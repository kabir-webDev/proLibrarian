import { serviceSectionData } from "../../../public/Assets/Data/serviceSectionData";
import ServiceSectionCard from "../../Card/ServiceSectionCard";

const ServiceBody = () => {
    return (
        <div className="mt-10 container">
            <h2 className="text-center text-4xl font-semibold px-4">What we have for you</h2>
            <p className="text-center text-2xl text-gray-400 font-medium my-5 px-4"> Some of the services we provide to meet your needs</p>
            <div className="flex justify-center gap-6 flex-wrap my-4">
                {serviceSectionData.map((data, index) => <ServiceSectionCard data={data} key={index} />)}
            </div>
        </div>
    );
};

export default ServiceBody;