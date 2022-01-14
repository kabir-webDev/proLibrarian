const SubHeaderHero = ({ src }) => {
  return (
    <div
      className="w-full h-48 md:h-80 xl:h-96 flex flex-col justify-center items-center text-white px-10"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${src}) center/cover no-repeat`,
        gap: "1.5em",
      }}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Blog</h1>
      <p className="text-center text-sm md:text-base px-6 md:px-10 xl:px-20 3xl:px-40">
        We are continuously posting latest industry updates on our blog page.
        Keep your eyes out to learn more and exciting news.
      </p>
    </div>
  );
};

export default SubHeaderHero;
