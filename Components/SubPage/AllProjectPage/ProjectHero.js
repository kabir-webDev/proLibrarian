const ProjectHero = () => {
  return (
    <div
      className="w-full h-48 md:h-80 xl:h-96 flex flex-col justify-center items-center text-white px-10"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/Assets/about/hero.webp') center/cover no-repeat",
        gap: "1.5em",
      }}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Our Projects
      </h1>
      <p className="text-center text-sm md:text-base">
        You may have come across some of our projects. Below are the few of many
        projects that we've successfully completed in the past and we take pride
        in our work.
      </p>
    </div>
  );
};

export default ProjectHero;
