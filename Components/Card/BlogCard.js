import Link from 'next/link'

const BlogCard = ({image, date, title, slug, author}) => {
    return (
      <div
        className="w-306 border bg-white overflow-hidden"
        style={{ height: "333px" }}
      >
        <div className="w-full">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full"
            style={{ height: "180px" }}
          />

          <div className="w-full p-5 lg:p-8" style={{ height: "153px" }}>
            <p className="text-sm pb-2 lg:pb-4 font-light" style={{ color: "#6d7783" }}>
              {date}
            </p>
            <p className="text-sm pb-1 font-light block lg:hidden" style={{ color: "#6d7783" }}>
              {author}
            </p>
            <Link href={'/blogs/'+ slug}>
              <a title={title} className="text-2xl block" style={{ color: "#0e497b" }}>
                {title.substr(0, 35)}
              </a>
            </Link>

          </div>
        </div>
      </div>
    );
}

export default BlogCard