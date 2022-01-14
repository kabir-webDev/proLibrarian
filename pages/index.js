import User from "../components/User";
import Layout from "../Layout";

export default function Home({ blog, comments, projects }) {
  return (
    <Layout>
      <h1 className="text-red-500">This is Something</h1>
      <User />
    </Layout>
  );
}
