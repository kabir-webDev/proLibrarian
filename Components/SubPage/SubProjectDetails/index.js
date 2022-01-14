import Layout from "../../../Layout";
import ProjectDetailsContainer from "./DetailsContainer.js";
import ProjectDetailsHero from "./Hero";
import React from "react";
import Head from "next/head";
import GetStarted from "../../Card/GetStarted";
const SubProjectDetails = ({ details: data }) => {
  const [details, setDetails] = React.useState({});
  const [projectImages, setProjectImages] = React.useState([]);
  React.useEffect(() => {
    let obj = {
      id: data?.id || 1,
      title:
        data?.attributes?.title ||
        "One of your best product become more stand out",
      blurb: data?.attributes?.blurb || "",
      liveLink: data?.attributes?.liveLInk || "#",
      clientName: data?.attributes?.clientName || "Rony Hive",
      descriptions: data?.attributes?.descriptions || "",
      releaseDate: data?.attributes?.releaseDate || new Date(),
    };
    let images =
      data?.attributes?.images?.data?.map((obj) => ({
        id: obj?.id,
        src: obj?.attributes?.url,
      })) || [];
    setProjectImages(images);
    setDetails(obj);
  }, []);

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      {Object.keys(data).length === 0 ? (
        <div className="w-full flex flex-col h-screen md:h-417 items-center justify-center py-14">
          <img src="/projects/project-not-found.gif" className="h-36 lg:h-52" />
          <h1 className="mt-4 font-bold text-primary text-lg lg:text-xl xl:text-2xl">
            Project Not found
          </h1>
        </div>
      ) : (
        <React.Fragment>
          <ProjectDetailsHero />
          <ProjectDetailsContainer
            projectImages={projectImages}
            details={details}
          />
          <GetStarted />
        </React.Fragment>
      )}
    </Layout>
  );
};
export default SubProjectDetails;
