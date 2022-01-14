import HeroSection from "./SubHomePage/HeroSection";
import ClientLogo from "./SubHomePage/ClientLogo";
import LetsTalk from "./SubHomePage/LetsTalk";
import AuthorWithBlogSectionCard from "../Card/AuthorWithBlogSectionCard";

const SubHomePage = () =>{
    return(
        <>
            <HeroSection />
            <ClientLogo/>
            <LetsTalk/>
            <div>
                <div className="py-10">
                    <p className="text-center text-light_blue pt-4 text-base">From Our Blog</p>
                    <h2 className={'text-center text-xl md:text-3xl py-3'} style={{color: '#222a41'}}>
                        Exciting news around every corner!
                    </h2>
                </div>
                <AuthorWithBlogSectionCard/>
            </div>
        </>
    )
}
export default SubHomePage;