import Link from "next/link";

function ErrorPage() {
  return (
    <div className="w-full h-auto mb-6 ">
      <div className="text-center flex flex-col justify-center items-center mt-10 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-28 2xl:mt-32 px-4">
        <div className="grid grid-cols-3 gap-5">
          <div className="ml-12 sm:ml-20 md:ml-28 lg:ml-40 xl:ml-48 2xl:ml-60 border-b-4 border-dashed border-primary"></div>
          <div className="">
            <img
              src="/Group 702.svg"
              alt="Error!!"
              className="object-contain"
            />
          </div>
          <div
            className="mr-12 sm:mr-20 md:mr-28 lg:mr-40 xl:mr-48 2xl:mr-60 border-b-4 border-dashed border-primary"
            style={{ marginTop: "41%", color: "#0e497b" }}
          ></div>
        </div>
        <div className="">
          <h1
            className=" font-semibold text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 3xl:mt-14 uppercase"
            style={{
              color: "#19181b",
            }}
          >
            Page Not Found
          </h1>
          <h1
            className="font-normal px-2 sm:px-12 md:px-16 lg:px-20 xl:px-0 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-5 sm:mt-8 md:mt-10 xl:mt-12 xl:max-w-5xl"
            style={{
              color: "#19181b",
            }}
          >
            The page you are looking for is not available.
          </h1>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 3xl:mt-16 pb-5 sm:pb-7 md:pb-10 lg:pb-12 xl:pb-14 3xl:pb-20">
          <Link href="/">
            <button className=" text-white  px-3 sm:px-6 md:px-7 lg:px-8 3xl:px-9 py-2 md:py-4 lg:py-5 3xl:py-6  rounded bg-yellow-500 hover:bg-yellow-600">
              <span className="text-xs md:text-base xl:text-xl font-bold tracking-wider px-4 sm:px-5 mg:px-6 lg:px-8 3xl:px-9">
                Back To Home
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
