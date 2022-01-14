import SubHeaderHero from "../../Components/SubPage/BlogPage/SubHeaderHero";
import AuthorWithBlogSectionCard from "../../Components/Card/AuthorWithBlogSectionCard";
import Layout from "../../Layout";
import axios from 'axios'

const Blogs = ({blogs}) => {

    return (
        <Layout>
            <div>
                <SubHeaderHero
                    src={'/blog_page_hero_image.webp'}
                />
                <div className="py-10">
                    <p className="text-center text-light_blue pt-4 text-base">From Our Blog</p>
                    <h2 className={'text-center text-xl md:text-3xl py-3'} style={{color: '#222a41'}}>
                        Exciting news around every corner!
                    </h2>
                </div>
                {
                    blogs?.data.map(blog => {
                        return (
                            <AuthorWithBlogSectionCard key={blog.id} data={blog} />
                        )
                    })
                }

            </div>
        </Layout>
    )
}

export default Blogs


export const getServerSideProps = async (ctx) => {
    const base_url = process.env.API_URL
    const props = {
        blogs: []
    }

    try{
        const {data: blogs} = await axios.get(base_url + 'authors?populate=image,blogs.images')
        props.blogs = blogs
    }catch (e) {

    }
    return ({
        props
    })
}