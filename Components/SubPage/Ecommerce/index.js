import CorporateProject from "../SubCorporatePage/CorporateProject";
import LetsTalk from "../SubHomePage/LetsTalk";
import EcommerceHero from "./EcommerceHero";
import Eplatform from "./Eplatform";
import ETabSection from "./ETabSection";

const EcommerceSection = ({ projects }) => {
  return (
    <>
      <EcommerceHero />
      <Eplatform />
      <ETabSection />
      <CorporateProject projects={projects} />
      <LetsTalk />
    </>
  );
};

export default EcommerceSection;
