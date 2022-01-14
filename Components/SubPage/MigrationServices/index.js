import CorporateProject from "../SubCorporatePage/CorporateProject";
import LetsTalk from "../SubHomePage/LetsTalk";
import MigrationHero from "./MigrationHero";
import MigrationSection from "./MigrationSection";
import OurServices from "./OurServices";

const MigrationServices = ({ projects }) => {
  return (
    <>
      <MigrationHero />
      <MigrationSection />
      <OurServices />
      <CorporateProject projects={projects} />
      <LetsTalk />
    </>
  );
};

export default MigrationServices;
