import AnimatedCheck from "../../../AnimatedCheck";

const ThanksYou = () => {
  return (
    <div className="pt-24 pb-40">
      <div
        className={"2xl:w-826 w-340 md:w-517 xl:w-779 relative mt-16 mx-auto"}
        style={{ background: "#ecf6ff" }}
      >
        <div className={"absolute w-full left-0 flex justify-center -top-16"}>
          <AnimatedCheck />
        </div>
        <p
          style={{ color: "#0e497b" }}
          className="pt-16 pb-8 xl:text-3xl text-center tracking-wider font-bold text-xl"
        >
          We're ready to help you hire
        </p>
        <p className="text-sm xl:text-base text-gray-700 pb-10 md:px-16 text-center tracking-wider mx-10">
          Thanks for the information - we're excited to help you. One of our
          local recruiters will reach out to you soon.
        </p>
      </div>
    </div>
  );
};

export default ThanksYou;
