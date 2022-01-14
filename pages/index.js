import SubHomePage from "../Components/SubPage/SubHomePage";
import Layout from "../Layout";
import axios from "axios";

export default function Home({ blog, comments, projects }) {
  return (
    <Layout>
      <SubHomePage blog={blog} comments={comments} projects={projects} />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const base_url = process.env.API_URL;
  const props = {
    blog: null,
    comments: [],
    projects: [],
  };
  try {
    const { data: blogs } = await axios.get(
      base_url + "authors?populate=image,blogs.images"
    );
    props.blog = blogs.data[0] || null;

    const { data: comments } = await axios.get(
      base_url + "testimonials?populate=*"
    );
    props.comments = comments?.data || [];

    const { data: projects } = await axios.get(
      base_url + "projects?populate=*"
    );
    props.projects = projects?.data || [];
  } catch (e) {}
  return {
    props,
  };
};
