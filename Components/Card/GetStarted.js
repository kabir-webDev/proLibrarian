import Link from "next/link";

const GetStarted = () => {
  return (
    <div
      className="flex flex-col justify-center items-center py-12 smd:py-14 md:py-16 2xl:py-20"
      style={{ marginBottom: -1, background: "#0E497B" }}
    >
      <p className="tracking-widest text-white text-xl md:text-2xl 2xl:text-4xl font-semibold text-center  mx-5 md:mx-0">
        Ready? Let's get started on your vision.
      </p>
      <div className=" pt-6 md:pt-8 xl:pt-10">
        <Link href="/contact-us">
          <button
            className="tracking-widest bg-yellow-400 hover:bg-yellow-500 transition duration-200 py-2 px-4 md:py-4 md:px-7  2xl:px-8 2xl:py-5 font-semibold text-gray-700 rounded-sm text-sm xl:text-base 2xl:text-lg"
            style={{ color: "#00324D" }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
