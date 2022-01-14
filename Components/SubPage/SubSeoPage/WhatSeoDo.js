const WhatSeoDo = () => {
    const data = [
        {
            iconLoc: "/Assets/web-design-svg/user.svg",
            title: "Seo Consulting",
            subTitle: "Algosolver will work with you to provide you with the information for optimizing your site to make you findable through major search engines."
        },
        {
            iconLoc: "/Assets/web-design-svg/refresh-page-option.svg",
            title: "SEO Analysis",
            subTitle: "Algosolver will perform a detailed analysis of your existing site and identify areas which may be able to be improved to increase your SEO score."
        },
        {
            iconLoc: "/Assets/web-design-svg/progress-report-1.svg",
            title: "Website Audit",
            subTitle: `Algosolver will analyze your site to identify if there are places which may actually hurt your search engine ranking, and find ways to improve it.`
        },
        {
            iconLoc: "/Assets/web-design-svg/lock.svg",
            title: "Competitive Research",
            subTitle: "Algosolver will perform an analysis of your competitors under prime keywords, and find ways of improving your SEO score to come out on top."
        },
        {
            iconLoc: "/Assets/web-design-svg/Settings-gears-icon-logo.svg",
            title: "Keyword Research and Optimization",
            subTitle: "Using advanced tools, Algosolver can find the phrases that people actually use when seeking your products and services, so you can improve your ROI."
        },
        {
            iconLoc: "/Assets/web-design-svg/customer-service.svg",
            title: "On-page Seo Optimization",
            subTitle: "We will help you find ways of using existing content on your site to increase your SEO scores, and outperform your competitors."
        },
    ]
    return (
        <div className="mx-4 mt-20">
            <div className="mt-10">
                <div className="mx-4 smd:mx-14 lg:mx-36 xl:mx-48">
                    <h1 className="uppercase text-center text-3xl xl:text-4xl font-bold "><span className="text-primary">WHAT</span> CAN SEO DO?</h1>
                    <p className="mt-6 text-center text-base text-gray-500 leading-8">Getting a top search engine ranking can make a large difference in your ability to attract leads and customers through the internet. Search Engine Optimization will help increase the likelihood that people can find your site when they search for terms to answer real questions. SEO is a complicated process which will help you structure your site in a way that prioritizes important keywords and phrases so as to increase traffic to your site.</p>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 justify-items-center content-center mt-10">
                <div className="flex flex-wrap justify-center items-center mt-10 gap-6 lg:gap-3 xl:gap-6 lg:col-span-1">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className="px-4 py-2 lg:px-2 w-96 md:w-80 lg:w-56 lg:h-44 xl:w-64 2xl:w-72 3xl:w-80 shadow-sm hover:shadow-lg rounded transition duration-200 cursor-pointer">
                                    <div className="flex items-center justify-center">
                                        <div
                                            className="flex items-center justify-center px-4 py-4">
                                            <img src={item.iconLoc} className="h-6 w-6" />
                                        </div>
                                        <div className="text-lg 2xl:text-xl font-bold">{item.title}</div>
                                    </div>
                                    <div
                                        className="text-center">
                                        <p className="text-sm text-gray-400">{item.subTitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="lg:col-span-1 hidden lg:flex items-center">
                    <img src="/Assets/web-design-svg/OKR0RO1.webp" className="w-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default WhatSeoDo;