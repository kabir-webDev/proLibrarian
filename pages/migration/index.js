import MigrationServices from "../../Components/SubPage/MigrationServices";
import axios from "axios";
import Layout from "../../Layout";

const MigrationPage = ({ projects }) => {
  return (
    <Layout>
      <MigrationServices projects={projects} />
    </Layout>
  );
};
export default MigrationPage;

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
