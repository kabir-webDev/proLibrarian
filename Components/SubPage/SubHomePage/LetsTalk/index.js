import Link from "next/link";
const LetsTalk = () => {
  return (
    <div className="flex h-auto py-8 my-10 lg:my-32 w-full px-10">
      <div
        className="h-auto flex flex-col items-center justify-center text-white w-full rounded-2xl"
        style={{
          color: "white",
          background: "url('/Assets/bg-lets-talk.png') center/cover no-repeat",
        }}
      >
        <div
          className="flex items-center justify-center px-14
        mt-3
        py-4
          lg:py-8
         font-medium text-lg text-center md:text-2xl md:px-48 lg:text-4xl lg:px-56 xl:px-96 2xl:mx-20 3xl:mx-52"
        >
          <p className="leading-snug">
            Let's Design an Amazing Website Together
          </p>
        </div>
        <div
          className="flex items-center justify-center px-14
         font-normal text-xs text-center md:px-48 lg:text-xl lg:px-40 2xl:mx-36 pb-5 xl:mx-28 3xl:mx-96 3xl:text-2xl"
        >
          <p className="leading">
            If you are looking for a professional website designer and developer
            with a stunning taste for design and technically proven, then you
            are landed to the right place.
          </p>
        </div>
        <div className="mb-2 lg:mb-16 mt-2 lg:mt-7">
          <Link href="/contact-us">
            <button
              style={{ backgroundColor: "#002340" }}
              className="lg:text-xl lg:px-20 lg:py-7 px-16 py-4 mb-4 rounded-md font-bold text-xs"
            >
              Let's talk!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
