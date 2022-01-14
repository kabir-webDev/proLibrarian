import Head from "next/head";
import React from "react";
import CardSection from "../../Components/SubPage/Contact-Us/CardSection";
import ContactUsHero from "../../Components/SubPage/Contact-Us/Contact-Us-Hero";
import ContactFormContainer from "../../Components/SubPage/Contact-Us/ContactFormContainer";
import ContactQuatation from "../../Components/SubPage/Contact-Us/Quatation";
import Layout from "../../Layout";
const ContctUsPage = () => {
  return (
    <Layout>
      
      <ContactUsHero />
      <div className="flex flex-col-reverse md:flex-col h-auto items-center justify-center">
        <div className="flex flex-col">
          <ContactQuatation />
          <CardSection />
        </div>
        <ContactFormContainer />
      </div>
    </Layout>
  );
};
export default ContctUsPage;
