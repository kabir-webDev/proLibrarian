import axios from "axios";
import EcommerceSection from "../../Components/SubPage/Ecommerce";
import Layout from "../../Layout";

const ECommercePage = ({ projects }) => {
  return (
    <Layout>
      <EcommerceSection projects={projects} />
    </Layout>
  );
};
export default ECommercePage;

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
    console.log("Server Error");
  }
  return {
    props,
  };
};
