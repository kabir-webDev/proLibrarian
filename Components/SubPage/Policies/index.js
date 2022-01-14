import { useEffect, useState } from "react";
import PolicyHeroSection from "./PolicyHeroSection";
import Policy from "./Privacy-Policy";
import FAQ from "./SubFAQ/FAQ";
import Data from "./Privacy-Policy/data.js";
import { useRouter } from "next/router";
import Link from "next/link";

const Policies = () => {
  const privacy_policy = Data[0].privacy_policy;
  const terms_conditions = Data[0].terms;
  const cookie = Data[0].cookie;
  const router = useRouter();
  const query = router.query.tab;

  const levels = ["privacy", "terms", "cookies", "faq"];
  const [active, setActive] = useState("privacy");

  useEffect(() => {
    switch (query) {
      case "privacy":
        setActive("privacy");
        break;

      case "terms":
        setActive("terms");
        break;

      case "cookies":
        setActive("cookies");
        break;

      case "faq":
        setActive("faq");
        break;

      default:
        setActive("privacy");
    }
  }, [query]);

  return (
    <>
      <PolicyHeroSection
        job_title={
          active === "privacy"
            ? "Privacy Policy"
            : active === "terms"
            ? "Terms & Conditions"
            : active === "cookies"
            ? "Cookie Policy"
            : active === "faq"
            ? "Frequently Asked Questions"
            : ""
        }
      />

      <div className=" w-full  mt-16">
        <div className="text-sm flex justify-center md:text-xl text-center font-primary font-medium text-textColor">
          {levels.map((level, index) => {
            return (
              <div
                key={index}
                className={`${
                  active === level
                    ? "bg-indigo-800 text-white transition duration-500 mx-2 border rounded-md p-2"
                    : "mx-2 border rounded-md p-2"
                } transition duration-300`}
              >
                <button
                  className="group-hover:scale-105 group-hover:ease-out duration-75 group-hover:text-primary"
                  onClick={() => setActive(level)}
                >
                  <Link href={`/policies?tab=${level}`}>
                    {level === "privacy"
                      ? "Privacy Policy"
                      : level === "terms"
                      ? "Terms & Conditions"
                      : level === "cookies"
                      ? "Cookie Policy"
                      : level === "faq"
                      ? "FAQ"
                      : ""}
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {active === "privacy" && <Policy data={privacy_policy} />}
        {active === "terms" && <Policy data={terms_conditions} />}
        {active === "cookies" && <Policy data={cookie} />}
        {active === "faq" && <FAQ />}
      </div>
    </>
  );
};

export default Policies;
