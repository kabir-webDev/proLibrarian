import BookEdit from "../../components/BookEdit";
import Layout from "../../Layout";
import { useRouter } from "next/router";

const EditBook = ({ results }) => {
  const router = useRouter();
  return (
    <Layout>
      <BookEdit bookid={router.query?.bookid} info={results} />
    </Layout>
  );
};

export default EditBook;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.bookid}`
  );
  const response = await res.json();
  return {
    props: {
      results: response,
    },
  };
};
