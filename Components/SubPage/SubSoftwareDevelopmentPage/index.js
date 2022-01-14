import SoftwareHeroSection from "./SoftwareHeroSection";
import SubSimpleSolution from "./SubSimpleSolution";
import LetsTalk from '../SubHomePage/LetsTalk';
import SubMainFeatures from "./SubMainFeatures";
import DevelopmentLifecycle from "./DevelopmentLifecycle";

const SubSoftwareDevelopmentPage = () => {
    return (
        <div>
            <SoftwareHeroSection/>
            <SubSimpleSolution/>
            <SubMainFeatures/>
            <DevelopmentLifecycle/>
            <LetsTalk/>
        </div>
    );
};

export default SubSoftwareDevelopmentPage;