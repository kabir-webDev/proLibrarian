const Policy = ({ data }) => {
  return (
    <div className=" px-2 sm:px-8 lg:px-20 3xl:px-72 py-20 3xl:py-20">
      <h1 className="py-6 text-gray-500 text-xs">{data.updated}</h1>
      <h1 className="pt-6 pb-3 text-blue-500 text-xs md:text-base ">
        {data.title}
      </h1>
      <div className="py-4 text-xl lg:text-4xl font-bold text-gray-800">
        <p>{data.header}</p>
        <p>{data.sub_header}</p>
      </div>
      <h1
        className="leading-8 text-xs md:text-sm"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></h1>
    </div>
  );
};

export default Policy;
