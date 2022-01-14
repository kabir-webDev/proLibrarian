import { featuredWorksData } from "../../../public/Assets/Data/featuredWorksData";
import ProjectCard from "../../Card/ProjectCard";

const ProjectBody = ({projects:data}) => {
    // console.log(data);
    return (
        <div className="container mb-14">
            <p className="text-center text-base text-blue-500 font-medium uppercase mt-10">our portfolio</p>
            <div className="text-center text-4xl font-semibold mt-4 mb-6" style={{ color: '#1c182b' }}>Featured Works</div>
            <div className="flex justify-center gap-6 flex-wrap my-4">
                {data.map((item, index) => <ProjectCard key={index} item={item} />)}
            </div>
        </div>
    );
};

export default ProjectBody;