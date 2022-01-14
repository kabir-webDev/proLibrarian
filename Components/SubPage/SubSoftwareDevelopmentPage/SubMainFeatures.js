import React from 'react';

const SubMainFeatures = () => {
    const data = [
        {
            icon: "/Assets/software-development/design_icn.svg",
            title: "Usable Design",
            description: "Design crafted to fit all important standards and be usable to your users and partners."
        },
        {
            icon: "/Assets/software-development/code_icn.svg",
            title: "Clean Code",
            description: "Code that works in all browsers and compatible with all the W3 standards and recommendations."
        },
        {
            icon: "/Assets/software-development/responsive_icn.svg",
            title: "Fully Responsive",
            description: `Website that works in all browsers and fits perfectly on all devices you are going to support.`
        },
        {
            icon: "/Assets/software-development/support_icn.svg",
            title: "Awesome Support",
            description: "We are here for you from day one to your launch, and after that to make sure everything works well."
        },
    ]
    return (
        <div className="my-10">
            <h1 className="text-2xl xl:text-3xl 3xl:text-4xl font-bold text-center" style={{ color: '#30364d' }}>Some Of Our Main Features</h1>
            <div className="flex flex-wrap justify-center mt-10 gap-6">
                {data.map((item, index) => {
                    return (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-6 px-10 sm:px-4 3xl:px-10" key={index}>
                            <div className="flex flex-col items-center md:items-start">
                                <img src={item.icon} alt="icon" className="w-12 h-12 mb-4 xl:mb-8" />
                                <h3 className="text-xl xl:text-2xl 3xl:text-3xl font-bold text-center md:text-left" style={{ color: '#30364d' }}>{item.title}</h3>
                                <p className="text-sm xl:text-lg 3xl:text-xl text-center md:text-left mt-4 xl:mt-8" style={{ color: '#30364d' }}>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SubMainFeatures;