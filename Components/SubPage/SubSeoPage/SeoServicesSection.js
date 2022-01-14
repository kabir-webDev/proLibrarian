import Link from "next/link";

const SeoServicesSection = () => {
    const data = [
        {
            icon: "/Assets/web-design-svg/browsing.svg",
            title: "Local SEO New York",
            description: "Make sure your site can be found by local New York customers seeking your products and services."
        },
        {
            icon: "/Assets/web-design-svg/briefcase.svg",
            title: "Cost-Effective SEO Solutions",
            description: "Don’t spend too much on ineffective or improbable guarantees. Algosolver will work within your budget."
        },
        {
            icon: "/Assets/web-design-svg/marketing.svg",
            title: "Advanced SEO Services",
            description: `Algosolver will develop advanced content marketing and linking strategies to ensure successful search engine ranking improvements`
        },
        {
            icon: "/Assets/web-design-svg/diploma.svg",
            title: "Affordable SEO Services In New York",
            description: "Make sure your New York business can be found by people in your region."
        },
    ]
    return (
        <div className="mx-10 mt-12">
            <div className="lg:grid grid-cols-2 justify-items-center">
                <div className="">
                    <h1 className="text-3xl xl:text-4xl font-bold py-4 uppercase "><span className="text-primary">Algosolver</span> SEO<br />SERVICES</h1>
                    <p className="text-base font-light text-gray-500 leading-8">Ensuring that your site appears on the first few results in search engines such as Google, Bing, and Yahoo, is crucial for your success. Studies have shown that most people do not click beyond the first page of responses when searching the internet. For this reason, the value of appearing with a search ranking of 1-5 is a magnitude higher than appearing 15th. Unfortunately, search engines keep their search algorithms as closely guarded secrets. For this reason, you need an expert SEO company to help your site appear when people seek your products or services. Algosolver will work with you to create a list of the top keywords and phrases that are most likely to drive sales to your site, combined with advanced linking strategies for generating interest. We will work with you to create content that will generate the ideal traffic to your site, so that people find you when seeking answers to their specific questions.</p>
                    <div className="mt-10 flex justify-center lg:justify-start">
                        <Link href="/contact-us">
                            <a className="text-white bg-primary text-base lg:text-lg font-medium py-4 px-10 rounded-full hover:bg-white hover:text-primary hover:border-2 hover:border-primary uppercase">
                                Get Started
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mt-10 gap-6">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="py-6 md:h-72 lg:h-346 xl:h-300 w-548 md:w-80 lg:w-52 xl:w-279 2xl:w-315 3xl:w-96 rounded-md my-2 bg-white transition duration-400 ease-in transform group-hover:shadow-xl shadow-md xp-4 pt-2 cursor-pointer md:hover:border-b-4 border-primary group web-design-card-hover">
                                <div className="flex justify-center">
                                    <div className="bg-white shadow-xl rounded-full w-28 h-28 flex flex-row items-center justify-center group-hover:bg-primary
                                        ">
                                        <img src={item?.icon} className="m-6 " />
                                    </div>
                                </div>
                                <h2 className="py-4 px-2 text-xl xl:text-2xl 3xl:text-2xl font-bold text-center group-hover:text-primary">
                                    {item.title}
                                </h2>
                                <p className="text-center text-sm 3xl:text-base px-2 pt-2 text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SeoServicesSection;