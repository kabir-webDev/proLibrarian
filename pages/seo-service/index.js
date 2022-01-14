import SubSeoPage from "../../Components/SubPage/SubSeoPage";
import axios from "axios";

const SEOPage = ({ projects }) => {
  return (
    <>
      <SubSeoPage projects={projects} />
    </>
  );
};
export default SEOPage;

export const getServerSideProps = async () => {
  const base_url = process.env.API_URL;
  const props = {
    projects: [],
  };
  try {
    const { data: projects } = await axios.get(
      base_url + "projects?populate=*"
    );
    props.projects = projects?.data || [];
  } catch (e) {
    //   console.log(e)
  }
  return {
    props,
  };
};
