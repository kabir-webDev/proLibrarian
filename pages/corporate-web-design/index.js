import SubCorporatePage from "../../Components/SubPage/SubCorporatePage";
import axios from "axios";

const CorporatePage = ({ projects, base_url }) => {
  console.log(base_url);

  return (
    <div>
      <SubCorporatePage projects={projects} />
    </div>
  );
};
export default CorporatePage;

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
