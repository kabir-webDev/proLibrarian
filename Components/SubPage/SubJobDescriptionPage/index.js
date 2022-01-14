import JobHeroSection from "./JobHeroSection";
import JobSummery from "./JobSummery/JobSummery";

const SubJobDescriptionPage = ({details}) => {
    return (
        <div>
            <JobHeroSection details={details}/>
            <JobSummery details={details}/>
        </div>
    );
};

export default SubJobDescriptionPage;