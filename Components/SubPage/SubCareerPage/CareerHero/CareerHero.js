const CareerHero = () => {
  return (
    <div
      className="w-full h-48 md:h-80 xl:h-96 flex flex-col justify-center items-center text-white px-10"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),url('/ourProjectBanner.webp') center/cover no-repeat",
        gap: "1.5em",
      }}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Join Our Team
      </h1>
      <p className="text-center -mt-5 sm:mt-0 text-sm md:text-base">
        We merge imagination and technology to help brands grow in an age of
        digital transformation. At Algosolver, we foster and inspire innovative
        ideas to support growth and value addition. We are passionate about the
        work we do.
      </p>
    </div>
  );
};

export default CareerHero;
