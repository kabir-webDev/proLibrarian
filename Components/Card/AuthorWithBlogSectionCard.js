import BlogCard from "./BlogCard";
import BlogAuthorCard from "./BlogAuthorCard";

const AuthorWithBlogSectionCard = ({data}) => {
    return (
        <div className="flex justify-center gap-6 flex-wrap my-4">
            <BlogAuthorCard
                name={data?.attributes.name}
                date={new Date(data?.attributes.createdAt).toDateString()}
                title={data?.attributes.subText.substr(0, 50)}
            />
            {
                data?.attributes.blogs.data[0] ? (
                    <BlogCard
                        image={data?.attributes?.blogs?.data[0]?.attributes?.images?.data?.length > 0 ? data?.attributes?.blogs?.data[0]?.attributes?.images.data[0].attributes.formats.thumbnail.url : null}
                        date={new Date(data.attributes.blogs.data[0].attributes.createdAt).toDateString()}
                        title={data.attributes.blogs.data[0].attributes.title}
                        slug={data.attributes.blogs.data[0].attributes.slug}
                        author={data.attributes.name}
                    />
                ) : ''
            }
            {
                data?.attributes.blogs.data[1] ? (
                    <BlogCard
                        image={data?.attributes?.blogs?.data[1]?.attributes?.images?.data?.length > 0 ? data?.attributes?.blogs?.data[1]?.attributes?.images.data[0].attributes.formats.thumbnail.url : null}
                        date={new Date(data.attributes.blogs.data[1].attributes.createdAt).toDateString()}
                        title={data.attributes.blogs.data[1].attributes.title}
                        slug={data.attributes.blogs.data[1].attributes.slug}
                        author={data.attributes.name}
                    />
                ) : ''
            }


        </div>
    )
}

export default AuthorWithBlogSectionCard