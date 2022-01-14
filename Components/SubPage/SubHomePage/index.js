import HeroSection from "./HeroSection";
import HomeServices from "./HomeServices";
import LetsTalk from "./LetsTalk";
import TestimonialSection from "./Testimonial";
import TotalProjects from "./TotalProjects";
import FeaturedWorks from "./FeaturedWorks";
import AuthorWithBlogSectionCard from "../../Card/AuthorWithBlogSectionCard";
import SubMessageFromManagements from "./SubMessageFromManagements";
import ServiceSection from "./ServiceSection";

const SubHomePage = ({comments, projects, blog}) =>{
  // console.log(projects);
    return (
      <>
        <HeroSection />
        <HomeServices />
        <TotalProjects/>
        <SubMessageFromManagements />
        <ServiceSection />
        <FeaturedWorks projects={projects}/>
        <div>
          <div className="py-10">
            <p className="text-center text-light_blue pt-4 text-base">
              From Our Blog
            </p>
            <h2
              className={"text-center text-xl md:text-3xl py-3"}
              style={{ color: "#222a41" }}
            >
              Exciting news around every corner!
            </h2>
          </div>
          <AuthorWithBlogSectionCard data={blog} />
          <TestimonialSection comments={comments} />
        </div>
        {/* <ClientLogo/> */}
        <LetsTalk />
      </>
    );
}
export default SubHomePage;