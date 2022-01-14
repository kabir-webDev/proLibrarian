import React from 'react';
import UiUXHeroSection from './UiUXHeroSection';
import CorporateProject from '../SubCorporatePage/CorporateProject';
import FindUs from '../SubHomePage/TotalProjects/FindUs';
import LandingPageInfo from './LandingPageInfo';
import DesignMethod from './DesignMethod';
import DesignProfessionals from './DesignProfessionals';

const SubUiUxPage = ({projects}) => {
    return (
        <div>
            <UiUXHeroSection/>
            <LandingPageInfo/>
            <DesignMethod/>
            <DesignProfessionals/>
            <CorporateProject projects={projects} />
            <FindUs/>
        </div>
    );
};

export default SubUiUxPage;