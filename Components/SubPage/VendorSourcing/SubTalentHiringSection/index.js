import HiringTalentCard from './HiringTalentCard'
import { useState } from "react";
import Link from 'next/link';

const SubTalentHiringSection = () => {
    const data = [
        {
            id: 1,
            title: 'Contact Talent',
            value: 'contract_talent',
            icon: '/talent-hiring-asset/contact.svg',
            description: 'Hire skilled professional on a temporary basis for short- or long term assignment.',
        },
        {
            id: 2,
            title: 'Permanent Placement',
            value: 'permanent_placement',
            icon: '/talent-hiring-asset/Outline.svg',
            description: 'Add full-time employees  - early -to mid- career or executive level.',
        },
        {
            id: 3,
            title: 'Managed Solutions',
            value: 'managed_solution',
            icon: '/talent-hiring-asset/product-durability.svg',
            description: 'Millions  of remote candidates. Secure virtual workspaces. Let us contact you ',
        },
    ];
    const [selected, setSelected] = useState({value:"contract_talent"});

    return (
        <>
            <p className=" font-normal 2xl:font-medium text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl text-center mt-12"
                style={{
                    color: "#0e497b",
                }}>Tell us what you are looking for to get started...</p>
            <div className="pt-10 pb-5 px-4 md:px-10 xl:px-20 2xl:px-24">
                <hr />
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 mx-2">
                {
                    data.map((item, index) => {
                        return (
                            <HiringTalentCard
                                key={index}
                                item={item}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )
                    })
                }
            </div>

            <div className="flex justify-center mx-auto my-12">
                <Link href={{ pathname: "/vendor-sourcing/title-location", query: { vendorType: selected.value } }}>
                    <a className="bg-primary font-medium px-10 md:px-14 xl:px-16 py-2 md:py-3 xl:py-4 text-white ">Next</a>
                </Link>
            </div>
            <div className="flex justify-center items-center mt-14 mb-28">
                <img src="/talent-hiring-asset/Icon awesome-phone-alt.svg" alt="phoneImg" className="h-8 w-8 xl:w-11 xl:h-11 pr-3.5" />
                <h1 className="text-center font-medium text-xl 3xl:text-4xl" style={{color: "#0e497b"}}> Or call us at +1-347-849-7449</h1>
            </div>
           
        </>
    );
};

export default SubTalentHiringSection;