import ProjectBody from "../../Components/SubPage/AllProjectPage/ProjectBody";
import ProjectHero from "../../Components/SubPage/AllProjectPage/ProjectHero";
import Layout from "../../Layout";
import axios from "axios";

const OurProject = ({ projects }) => {
    return (
        <Layout>
            <ProjectHero />
            <ProjectBody projects={projects} />
        </Layout>
    );
};

export default OurProject;

export const getServerSideProps = async () => {
    const base_url = process.env.API_URL
    const props = {
        projects: []
    }
    try{
        const { data: projects } = await axios.get(base_url + 'projects?populate=*')
        props.projects = projects?.data || [];
      
    }catch (e) {
    //   console.log(e)
    }
    return ({
        props
    })
  }