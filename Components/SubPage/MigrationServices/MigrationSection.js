import { useState } from "react";
import MigrationCard from "./MigrationCard";

const MigrationSection = () => {
  const levels = ["hosting", "domain"];
  const [active, setActive] = useState("hosting");

  const content1 =
    "Algosolver provides the highest quality site migration services in New York. Whether you are doing something as simple as moving a site between web hosts, to a full migration from one CMS to a WordPress platform, we will handle every aspect of the transfer, including database and file migration.";

  const content2 =
    "Your domain name is your identity on the web. While your site may live at a numerical IP address, your domain name is what your customers recognize. It is your brand; it is who you are. For whatever reason, you may choose to make changes to your domain. You may have gone through a company name change, or you may have acquired a new company, or for any reason, you might wish to change your domain. Algosolver can handle all of the technical aspects involved with migrating your domain to a new domain, subdomain, or any combination of the above.";

  const dataList1 = [
    {
      icon: "/Assets/migration_svg/server-1.svg",
      title: "Server to Server Migration",
      description:
        "Algosolver will manage the full migration of your site between local servers or to new remote servers located within the cloud.",
    },
    {
      icon: "/Assets/migration_svg/data.svg",
      title: "Server to Web Hosting",
      description:
        "Algosolver will handle the seamless migration of your content and your data from your local servers to a remote web host.",
    },
    {
      icon: "/Assets/migration_svg/internet-2.svg",
      title: "Web Hosting to Web Hosting",
      description: `Changing web hosts? Algosolver can make sure that all of your content and data is moved without any interruption of service.

      `,
    },
    {
      icon: "/Assets/migration_svg/website.svg",
      title: "Web Hosting to Server",
      description:
        "Algosolver will perform full backups of your site and data from your web host to a locally hosted server or one in the cloud.",
    },
  ];

  const dataList2 = [
    {
      icon: "/Assets/migration_svg/www.svg",
      title: "Domain Name -> New Domain Name",
      description:
        "We can handle all transfers of your existing domain and set up redirects to ensure a seamless experience during your rebranding.",
    },
    {
      icon: "/Assets/migration_svg/http.svg",
      title: "Main-Domain -> Sub-Domain",
      description:
        "Algosolver can seamlessly handle the process of migrating all content from your subdomain to a brand new domain.",
    },
    {
      icon: "/Assets/migration_svg/domain.svg",
      title: "Sub-Domain -> Main-Domain",
      description: `Algosolver will develop advanced content marketing and linking strategies to ensure successful search engine ranking improvements`,
    },
    {
      icon: "/Assets/migration_svg/domain-1.svg",
      title: "Sub-Domain -> New Sub-Domain",
      description:
        "Do you simply need to migrate your site from one subdomain to another without any trouble? Algosolver will handle this.",
    },
  ];

  return (
    <>
      <div className=" w-full  mt-16">
        <div className="text-sm flex justify-center md:text-xl text-center font-primary font-medium text-textColor">
          {levels.map((level, index) => {
            return (
              <div
                key={index}
                className={`w-5/12 cursor-pointer py-3 2xl:py-4 ${
                  active === level
                    ? "bg-primary text-white transition border duration-500 p-2"
                    : " border p-2"
                } transition duration-300`}
                onClick={() => setActive(level)}
              >
                <button className="group-hover:scale-105 group-hover:ease-out duration-75 group-hover:text-primary">
                  {level === "hosting"
                    ? "WEB HOSTING MIGRATION"
                    : level === "domain"
                    ? "DOMAIN NAME MIGRATION"
                    : ""}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <MigrationCard
        data={active == "hosting" ? dataList1 : dataList2}
        content={active == "hosting" ? content1 : content2}
      />
    </>
  );
};

export default MigrationSection;
