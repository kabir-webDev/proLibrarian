import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <motion.div
      className="grid grid-cols-7 grid-rows-1 md:grid-rows-2 h-96 lg:h-519 xl:h-691 3xl:h-1037"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="relative row-span-1 col-span-2 md:block hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="Assets/heroImage/Rectangle 251.webp"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative md:row-span-2 md:col-span-3 col-span-7 md:h-auto ">
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="text-center text-h z-10 text-white self-center uppercase font-medium 2xl:text-6xl lg:text-4xl md:text-2xl sm:text-3xl text-2xl md:mt-40">
            YOU DREAM IT. WE'LL
            <br />
            HELP YOU Build IT.
          </div>
          <Link href="/contact-us">
            <button className="px-6 2xl:px-8 text-base 2xl:text-xl py-3 bg-yellow-500 hover:bg-yellow-600 mt-4 md:mt-10 self-center font-medium text-white text-center z-10">
              Get Started
            </button>
          </Link>
        </div>
        <img
          src="Assets/heroImage/Rectangle254.webp"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative row-span-1 col-span-2 md:block hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="Assets/heroImage/Rectangle 252.webp"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative row-span-1 col-span-2 md:block hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="Assets/heroImage/Rectangle-1.webp"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative row-span-1 col-span-2 md:block hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="Assets/heroImage/Rectangle 253.webp"
          alt="hero image"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
