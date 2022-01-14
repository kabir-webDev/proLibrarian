import Link from "next/link";

const FindUs = () => {
  return (
    <div
      className=" flex items-center text-center flex-wrap flex-col justify-center md:flex-row smd:text-center md:justify-between md:text-left py-4 md:py-7 mx-8 sm:mx-14 md:mx-10 lg:mx-16 xl:mx-20 sm:px-4 md:px-8 2xl:mx-28 mt-14 2xl:mt-24 mb-20"
      style={{ boxShadow: "0 10px 40px 0px #def0ff" }}
    >
      <div
        className="flex flex-col gap-3 p-1 justify-center"
        style={{
          color: "#5e5e5e",
        }}
      >
        <p className="text-2xl font-normal" style={{ color: "#233d63" }}>
          Need to find us?
        </p>
        <p className=" text-base" style={{ color: "#222a41" }}>
          No problem, you've come to the right place.
        </p>
      </div>
      <div>
        <Link href="/contact-us">
          <button className=" flex items-center text-white font-normal  text-center px-6 md:px-8 xl:px-10 2xl:px-14 py-1 sm:py-1 md:py-2 2xl:py-3 md:text-base xl:text-base border-2 hover:border-primary bg-primary hover:bg-white hover:text-primary rounded-full mt-5 sm:mt-0">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
export default FindUs;
