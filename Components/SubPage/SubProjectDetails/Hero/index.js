const ProjectDetailsHero = () => {
    return (
      <div
        className="w-full flex flex-col justify-center items-center text-white px-10"
        style={{
          background:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/Assets/projectinfo/bg.jpeg') center/cover no-repeat",
          gap: "1.5em",
          minHeight: "50vh"
        }}>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"> Project Details</h1>
        </div>
    );
  };
  export default ProjectDetailsHero;
  