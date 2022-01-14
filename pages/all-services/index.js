import ServiceHero from '../../Components/SubPage/AllServicesPage/ServiceHero';
import ServiceBody from '../../Components/SubPage/AllServicesPage/ServiceBody';

import Layout from '../../Layout';


const AllServices = () => {
    return (
        <Layout>
            <ServiceHero />
            <ServiceBody/>
        </Layout>
    );
};

export default AllServices;