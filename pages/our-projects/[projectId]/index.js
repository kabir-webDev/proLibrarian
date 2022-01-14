import { useRouter } from 'next/router';
import React from "react";
import SubProjectDetails from '../../../Components/SubPage/SubProjectDetails';
import axios from "axios";

const EachProjectDetailsSection = ({ details }) => {
    const router = useRouter();
    //console.log(details);
    return (
        <SubProjectDetails projectId={router.query.projectId} details={details} />
    )
}
export default EachProjectDetailsSection;

export const getServerSideProps = async ({ query }) => {
    const base_url = process.env.API_URL;
    console.log(base_url)
    const props = {
        details: {}
    }
    // console.log(base_url);
    try {
        const { data } = await axios.get(`${base_url}projects/${query?.projectId}?populate=*`);
        props.details = data?.data || {};
    } catch (e) {
        //   console.log(e);
    }
    return ({
        props
    })
}