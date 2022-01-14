import React from "react";
import { navItems } from "../../public/Assets/Data/navItem";
import style from "./style.module.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileMenu = ({ className }) => {
  const router = useRouter();

  return (
    <div className={className}>
      <motion.div className="lg:col-span-2 flex items-center text-base">
        <img src="/Assets/white-Logo.svg" alt="" className="h-8 -mt-2" />
      </motion.div>
      <ul className="text-white">
        {navItems.map((item, itemIndex) => {
          return (
            <div className="flex" key={itemIndex}>
              <li
                className={`${style["mobileMenuNavItem"]} text-base mb-3 uppercase `}
              >
                <Link
                  href={`${
                    item.inPage
                      ? router.pathname === "/" //NOSONAR
                        ? `#${item.link}` //NOSONAR
                        : `/#${item.link}` //NOSONAR
                      : `/${item.link}` //NOSONAR
                  }`}
                >
                  <a
                    className="mt-3 text-white border-b-2 border-gray-800 hover:border-white transition duration-300 uppercase tracking-3.04 text-sm xl:text-base"
                  >
                    {item.menu}
                  </a>
                </Link>
                {item.subMenu && (
                  <ul
                    className={`${style["mobileMenuSubNavItem"]} cursor-pointer text-xs`}
                  >
                    {item.subMenu.map((subMenu, index) => {
                      return (
                        <div className="flex" key={index}>
                          <FaArrowRight className="mt-3" />
                          <li className="mt-3 text-white ml-3 border-b-2 border-gray-800 hover:border-white transition duration-300">
                            <Link
                              href={`${
                                subMenu.inPage
                                  ? router.pathname === "/" //NOSONAR
                                    ? `#${subMenu.link}` //NOSONAR
                                    : `/#${subMenu.link}` //NOSONAR
                                  : `/${subMenu.link}` //NOSONAR
                              }`}
                            >
                              <a className="uppercase tracking-3.04 text-sm xl:text-base">
                                {subMenu.name}
                              </a>
                            </Link>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                )}
              </li>
            </div>
          );
        })}
      </ul>
      <motion.a href="tel:+1-347-849-7449"
        className="border-2 px-3 py-2 border-white text-white hover:text-yellow-400 hover:border-yellow-400 transition duration-300 uppercase text-sm xl:text-base md:hidden"
        style={{ letterSpacing: "0.38px" }}
      >
        Schedule a call
      </motion.a>
    </div>
  );
};

export default MobileMenu;
