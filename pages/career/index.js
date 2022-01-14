import React from "react";
import SubCareerPage from "../../Components/SubPage/SubCareerPage";
import Layout from "../../Layout";
import axios from "axios";
import moment from "moment";
const CareerPage = ({jobs}) => {
  return (
    <Layout>
      <React.Fragment>
        <SubCareerPage jobs = {jobs} />
      </React.Fragment>
    </Layout>
  );
};
export default CareerPage;

export const getServerSideProps = async ({query}) => {
  const base_url = process.env.API_URL
  const props = {
      jobs: []
  }
  // console.log(base_url);
  try{
      const { data } = await axios.get(`${base_url}jobs?populate=*&filters[deadline][$gte]=${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}`);
      props.jobs = data?.data || []; 
  }catch (e) {
  //   console.log(e);
  }
  return ({
      props
  })
}