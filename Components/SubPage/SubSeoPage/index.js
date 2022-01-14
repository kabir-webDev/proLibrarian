import React from "react";
import Layout from "../../../Layout";
import CorporateProject from "../SubCorporatePage/CorporateProject";
import LetsTalk from "../SubHomePage/LetsTalk";
import SeoHeroSection from "./SeoHeroSection";
import SeoServicesSection from "./SeoServicesSection";
import WhatSeoDo from "./WhatSeoDo";

const SubSeoPage = ({ projects }) => {
  return (
    <Layout>
      <SeoHeroSection />
      <SeoServicesSection />
      <WhatSeoDo />
      <CorporateProject projects={projects} />
      <LetsTalk />
    </Layout>
  );
};

export default SubSeoPage;
