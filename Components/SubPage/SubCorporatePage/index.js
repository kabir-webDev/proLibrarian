import Layout from "../../../Layout/index";
import LetsTalk from "../SubHomePage/LetsTalk";
import CorporateHero from "./CorporateHero";
import CorporateProject from "./CorporateProject";
import WebDesignConsultation from "./WebDesignConsultation";
import WebDesignPart from "./WebDesignPart";

const SubCorporatePage = ({projects}) => {
    return (
        <Layout>
            <CorporateHero />
            <WebDesignPart/>
            <WebDesignConsultation/>
            <CorporateProject projects={projects}/>
            <LetsTalk/>
        </Layout>
    );
};

export default SubCorporatePage;