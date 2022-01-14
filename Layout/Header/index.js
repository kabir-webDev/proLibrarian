import React, { useState } from "react";
import { navItems } from "../../public/Assets/Data/navItem";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";
import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Algosolver.com</title>
      </Head>
      <VisibilitySensor
        onChange={(isVisible) =>
          isVisible && showMobileMenu ? null : setShowMobileMenu(false)
        }
        partialVisibility={true}
      >
        <div className="h-16 lg:h-90 shadow-lg grid grid-cols-2 lg:grid-cols-12 px-10 xl:px-20 overflow-x-hidden lg:overflow-visible">
          <div className="lg:col-span-2 flex items-center text-base">
            <Link href="/">
              <a>
                <img
                  src="/Assets/logo.svg"
                  alt=""
                  className="h-8 -mt-2 cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <div className="col-span-8 items-center hidden lg:flex z-50">
            <ul className="flex gap-6 xl:gap-9">
              {navItems.map((el, elIndex) => {
                return (
                  <li
                    key={elIndex}
                    className="relative group cursor-pointer h-90 grid place-items-center hover:border-b-4 hover:border-yellow-500 hover:text-yellow-500 transition duration-200 z-50"
                  >
                    <Link
                      href={`${
                        el.inPage
                          ? router.pathname === "/" //NOSONAR
                            ? `#${el.link}` //NOSONAR
                            : `/#${el.link}` //NOSONAR
                          : `/${el.link}` //NOSONAR
                      }`}
                    >
                      <a className="uppercase tracking-3.04 text-sm xl:text-base">
                        {el.menu}
                      </a>
                    </Link>

                    {el.subMenu && (
                      <ul
                        className="absolute left-0 w-96 shadow-lg z-50 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition duration-300 bg-white p-4 pb-0 group-hover:text-black group-hover:font-normal"
                        style={{ top: "90px" }}
                      >
                        {el.subMenu.map((item, itemIndex) => {
                          return (
                            <li
                              key={itemIndex}
                              className="mb-4 text-black hover:text-primary hover:underline"
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
                                <a className="uppercase tracking-3.04 text-sm xl:text-base">
                                  {item.name}
                                </a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-2 flex lg:grid place-items-center justify-end gap-7 overflow-hidden">
            <Link href="contact-us">
              <a
                href="tel:+1-347-849-7449"
                className="border-2 px-3 py-2 border-primary text-primary hover:text-white hover:bg-primary transition duration-300 uppercase text-sm xl:text-base hidden md:block"
                style={{ letterSpacing: "0.38px" }}
              >
                Schedule a call
              </a>
            </Link>
            <MobileMenuIcon
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
          </div>
        </div>
      </VisibilitySensor>
      <MobileMenu
        className={`fixed top-16 lg:top-24 right-0 h-screen ${
          showMobileMenu
            ? "translate-x-0 transform"
            : "transfrom translate-x-full"
        } z-50 w-4/6 sm:w-1/2 bg-gray-800 transition duration-500 px-8 py-5 lg:hidden`}
      />
    </>
  );
};

export default Header;
