import Layout from "../../Layout";
import { useRouter } from "next/router";
import UserEdit from "../../components/EditUser";

const EditBook = ({ results }) => {
  const router = useRouter();
  return (
    <Layout>
      <UserEdit userid={router.query?.userid} info={results} />
    </Layout>
  );
};

export default EditBook;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.userid}`
  );
  const response = await res.json();
  return {
    props: {
      results: response,
    },
  };
};
