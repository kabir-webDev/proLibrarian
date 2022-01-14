
import CareerHero from './CareerHero/CareerHero';
import Heading from './Perks/Heading';
import PerkListings from './Perks/PerkListings';
import SubFooter from './SubFooter/SubFooter';
import JobsContentHolder from './JobListings/ContentHolder';
import WeAreCreative from './WeAreCreative.js';
import React from "react";
const SubCareerPage = ({jobs}) => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        let modified = jobs.map((obj) => ({
            id: obj.id,
            title: obj?.attributes?.title || "Developer",
            type: obj?.attributes?.jobType || "Fulltime",
            deadline: obj?.attributes?.deadline || new Date(),
            vacancy: obj?.attributes?.vacancy || 1
        }));
        setData(modified);
    }, [])
    return (
        <div>
            <CareerHero />
            <WeAreCreative/>
            <JobsContentHolder data={data}/>
            <Heading />
            <PerkListings />
            <SubFooter />
        </div>
    );
};

export default SubCareerPage;