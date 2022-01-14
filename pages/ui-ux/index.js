import SubUiUxPage from "../../Components/SubPage/SubUiUxPage";
import Layout from "../../Layout";
import axios from "axios";

const UiUxPage = ({projects}) => {
    return (
      <Layout>
        <SubUiUxPage projects={projects}/>
      </Layout>
    )
}
export default UiUxPage;

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