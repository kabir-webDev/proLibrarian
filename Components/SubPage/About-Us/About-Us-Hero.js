const AboutUsHero = () => {
  return (
    <div
      className="w-full h-48 md:h-80 xl:h-96 flex flex-col justify-center items-center text-white px-10"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),url('/ourProjectBanner.webp') center/cover no-repeat",
        gap: "1.5em",
      }}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl"> About Us</h1>
      <p className="text-center -mt-5 sm:mt-0 text-sm md:text-base">
        We are a, New York based, software development company with diversified
        experience in different industry domains. Algosolver provides end to end
        technology solutions from startups to large corporations.
      </p>
    </div>
  );
};
export default AboutUsHero;
