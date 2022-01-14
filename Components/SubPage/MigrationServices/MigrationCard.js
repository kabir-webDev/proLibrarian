const MigrationCard = ({ data, content }) => {
  return (
    <div className="mx-10 mt-12">
      <div className="text-center smd:mx-32">
        <h1 className="text-lg tracking-widest text-gray-500">{content}</h1>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-wrap justify-center mt-10 gap-6 ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" py-6 md:h-72 lg:h-346 xl:h-324 w-full md:w-80 lg:w-52 xl:w-279 2xl:w-315 3xl:w-96 rounded-md my-2 bg-white transition duration-400 ease-in transform group-hover:shadow-xl shadow-md xp-4 pt-2 cursor-pointer md:hover:border-b-4 border-primary group web-design-card-hover"
              >
                <div className="flex justify-center">
                  <div
                    className=" bg-white shadow-xl rounded-full w-28 h-28 flex flex-row items-center justify-center group-hover:bg-primary
                                        "
                  >
                    <img src={item?.icon} className="p-6 " />
                  </div>
                </div>
                <h2 className="py-4 px-2 text-lg xl:text-xl 3xl:text-xl font-bold text-center group-hover:text-primary">
                  {item.title}
                </h2>
                <p className="text-center text-sm 3xl:text-base px-2 pt-2 text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MigrationCard;
