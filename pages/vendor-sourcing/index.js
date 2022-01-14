import Layout from "../../Layout";
import SubHeroSection from "../../Components/SubPage/VendorSourcing/SubHeroSection";
import AuthorWithBlogSectionCard from "../../Components/Card/AuthorWithBlogSectionCard";
import SubTheChoiceSection from "../../Components/SubPage/VendorSourcing/SubTheChoiceSection";
import SubCategoryShowcaseSection from "../../Components/SubPage/VendorSourcing/SubCategoryShowcaseSection";
import axios from "axios";

const VendorSourcing = ({blog}) => {
    return (
        <Layout>
            <SubHeroSection />

            <SubTheChoiceSection />

            <SubCategoryShowcaseSection />

            <div className={'py-10 2xl:py-20'}>
                <h2 className="2xl:text-3xl text-2xl tracking-wider font-bold text-center py-6" style={{color: '#222a41'}}>More from AlgoSolver</h2>
                <AuthorWithBlogSectionCard data={blog} />
            </div>
        </Layout>
    )
}

export default VendorSourcing


export const getServerSideProps = async (ctx) => {
    const base_url = process.env.API_URL
    const props = {
        blog: null
    }

    try{
        const {data: blogs} = await axios.get(base_url + 'authors?populate=image,blogs.images')
        props.blog = blogs.data[0] || null
    }catch (e) {

    }
    return ({
        props
    })
}
