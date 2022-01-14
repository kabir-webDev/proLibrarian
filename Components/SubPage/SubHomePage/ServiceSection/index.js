import Link from 'next/link';
import { serviceSectionData } from '../../../../public/Assets/Data/serviceSectionData';
import ServiceSectionCard from '../../../Card/ServiceSectionCard';

const ServiceSection = () => {
    const sliceData = serviceSectionData.slice(0, 6);
    return (
        <div className="md:my-20 container" id="service-section">
            <h2 className="text-center text-2xl lg:text-4xl font-semibold px-4">What we have for you</h2>
            <p className="text-center text-sm lg:text-2xl text-gray-500 font-medium my-5 px-4"> Some of the services we provide to meet your needs</p>
            <div className="flex justify-center gap-6 flex-wrap my-4">
                {sliceData.map((data, index) => <ServiceSectionCard data={data} key={index} />)}
            </div>
            {/* <div className="flex justify-center mx-auto mt-6 md:mt-12">
                <Link href="/all-services">
                    <a className="bg-primary rounded-sm font-medium text-white px-14 py-3 text-sm 2xl:text-xl text-center">See All</a>
                </Link>
            </div> */}
        </div>
    );
};

export default ServiceSection;