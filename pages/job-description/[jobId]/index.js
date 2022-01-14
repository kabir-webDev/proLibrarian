import SubJobDescriptionPage from '../../../Components/SubPage/SubJobDescriptionPage';
import Layout from '../../../Layout';
import { useRouter } from 'next/router';
import axios from 'axios';

const JobDescription = ({details}) => {
    const router = useRouter();
    return (
        <Layout>
            <SubJobDescriptionPage jobId={router.query?.jobId} details={details} />
        </Layout>
    );
};

export default JobDescription;

export const getServerSideProps = async ({ query }) => {
    const base_url = process.env.API_URL;
    console.log(base_url)
    const props = {
        details: {}
    }
    // console.log(base_url);
    try {
        const { data } = await axios.get(`${base_url}jobs/${query?.jobId}?populate=*`);
        props.details = data?.data || {};
    } catch (e) {
        //   console.log(e);
    }
    return ({
        props
    })
}