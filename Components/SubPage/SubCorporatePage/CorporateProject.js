import Link from 'next/link';
import ProjectCard from '../../Card/ProjectCard';

const CorporateProject = ({ projects: data }) => {
    const sliceData = data?.slice(0, 3);
    return (
        <div className="m-10">
            <div className="container md:mt-16" id="feature-works">
                <p className="text-center text-sm lg:text-base text-primary font-medium uppercase mt-10">
                    our portfolio
                </p>
                <div
                    className="text-center text-2xl lg:text-4xl font-semibold mt-4 mb-6"
                    style={{ color: "#1c182b" }}
                >
                    Featured Works
                </div>
                <div className="flex justify-center gap-6 flex-wrap my-4">
                    {sliceData?.map((item, index) => (
                        <ProjectCard key={index} item={item} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mx-auto mt-6 md:mt-12">
                <Link href="/our-projects">
                    <a className="bg-primary rounded-sm font-medium text-white px-8 py-3 text-sm 2xl:text-xl text-center">
                        See All Portfolio
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default CorporateProject;