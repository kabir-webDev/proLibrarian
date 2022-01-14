import Link from "next/link";

const ProjectCard = ({ item }) => {
  const imageUrl = item?.attributes?.images?.data?.map(
    (img) => img?.attributes?.url
  );
  const sliceImageUrl = imageUrl.slice(0, 1);
  return (
    <div className="relative rounded-md h-60 xl:h-281 3xl:h-324 w-96 smd:w-353 2xl:w-365 3xl:w-481 group my-2 mx-4 smd:mx-0 image-hover overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center w-full h-full z-10">
        <div className="absolute inset-0 bg-black opacity-0 transition-all duration-300 w-full h-full group-hover:opacity-70"></div>
        <Link href={`/our-projects/${item.id}`}>
          <a className="px-16 py-4 2xl:px-20 text-lg 2xl:text-2xl bg-primary self-center text-white text-center z-30 opacity-0 font-medium group-hover:opacity-100">
            View
          </a>
        </Link>
      </div>
      <img
        src={sliceImageUrl}
        alt="hero"
        className="w-full h-full object-cover transition duration-300 ease-in transform sm:group-hover:scale-105"
      />
    </div>
    //
  );
};

export default ProjectCard;
