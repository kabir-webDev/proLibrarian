import React from "react";
import AboutUsHero from "../../Components/SubPage/About-Us/About-Us-Hero";
import ValueCardSection from "../../Components/SubPage/About-Us/ValueCardSection";
import QualitySection from "../../Components/SubPage/About-Us/Quality";
import LetsTalk from "../../Components/SubPage/SubHomePage/LetsTalk";
import WhoWeAre from "../../Components/SubPage/About-Us/WhoWeAre";
import Layout from "../../Layout";
import axios from "axios";
const AboutUsPage = ({videoUrl}) => {
  return (
    <Layout>
      <div className="flex flex-col h-auto items-center justify-center my-5 gap-10">
      <AboutUsHero/>
      <QualitySection/>
      <WhoWeAre videoUrl={videoUrl}/>
      <ValueCardSection/>
      <LetsTalk/>
    </div>
    </Layout>
  );
};
export default AboutUsPage;

export const getServerSideProps = async (ctx) => {
  const base_url = process.env.API_URL
  const props = {
      videoUrl: ""
  }
  try{
      const {data} = await axios.get(base_url + 'about-us?populate=*');
      props.videoUrl = data?.data?.attributes?.video?.data?.attributes?.url || "";
  }catch (e) {
    console.error(e)
  }
  return ({
      props
  })
}
