import Link from "next/link";

const TabCard = ({ data }) => {
  return (
    <div className="mx-4">
      <div className="flex  flex-col items-center lg:flex-row w-full px-5 xl:px-4 2xl:px-52 mt-10">
        <div className="lg:mx-6 lg:w-1/2 p-2">
          <img src={data.img} className="w-full object-cover" />
        </div>
        <div className="lg:w-1/2 p-2">
          <h1 className="text-3xl xl:text-4xl font-bold py-4 uppercase ">
            <span className="text-primary">{data.title}</span>
          </h1>
          <p className="text-base font-light text-gray-500 leading-8">
            {data.description}
          </p>
          <div className="mt-10 flex justify-start lg:justify-start">
            <Link href="/contact-us">
              <a className="text-white bg-primary text-base lg:text-lg font-medium py-4 px-10 rounded-full hover:bg-white hover:text-primary border-2 hover:border-primary uppercase">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabCard;
