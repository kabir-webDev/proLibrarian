const JobHeroSection = ({details: data}) => {
  // console.log(data.attributes.title)
  const job_title = data.attributes.title;
  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-center text-h z-10 text-white self-center font-semibold text-2xl md:text-4xl xl:text-5xl 3xl:text-6xl tracking-widest">
          {job_title}
        </div>
      </div>
      <img
        src="/ourProjectBanner.webp"
        alt="hero image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default JobHeroSection;
