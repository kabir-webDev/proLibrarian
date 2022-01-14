import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const LandingPageInfo = () => {
    return (
            <div className="mx-10 md:mx-44 lg:mx-60 xl:mx-72 3xl:mx-500 mt-10 md:mt-20 md:grid grid-cols-2 justify-items-center content-center">
                <div className="text-center md:text-left" style={{ color: 'rgba(0, 0, 0, 0.74)' }}>
                    <h1 className="text-2xl font-bold md:text-3xl md:font-black xl:text-4xl 3xl:text-5xl">
                        Build Beautiful Landing Pages Faster.
                    </h1>
                    <p className="text-sm font-light mt-4 xl:mt-10">Create custom landing pages with Shades that convert more visitors than any website—no coding required.</p>
                    <Link href="/contact-us">
                    <a className="flex justify-center md:justify-start items-center mt-4 xl:mt-10 gap-6"><p className="text-primary font-bold text-sm">Get started now </p><FaArrowRight className="text-primary" />
                    </a>
                    </Link>
                </div>
                <div className="hidden md:block w-full">
                    <img src="/Assets/ui-ux_page/image.webp" className="w-full h-full objectFit" />
                </div>
            </div>
    );
};

export default LandingPageInfo;