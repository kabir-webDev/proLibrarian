import ManagementSpeechSlideItem from "../../../Slide/ManagementSpeechSlideItem";
import Slider from "react-slick";

const SubMessageFromManagements = () => {
  const ceoContent =
    "We, Algo Solver, are the company to ensure the future strong through the software development, specialized in communication and network. We have the latest information skills/experiences and excellent human resources. We promote business with our strong spirit that is to fulfill customers' requests at all times. Our company also creates what customers need to realize glamorous dream they have. As a result, we contribute to render an affluent society. These are our motivation. While improving our professional skill and learning the latest technology every day, we keep on challenging as the group of proposing-style system engineers. Moreover we provide high quality and value-added services to customers and societies as our 'highlighted skill,' and aim for global contributions. We will continue on providing the best performance for inspiring others. We would like to have your support and patronage, and are looking forward to doing business with you.";

  const ctoContent =
    "As CTO of Algo Solver, it is my responsibility to have a detailed overview of the vast scope of technological solutions we provide. Even more importantly, I am putting much of my focus on the orchestration of our  Engineering efforts. I am delighted by the fact that the employees of Algo Solver have implemented multiple B2B marketplace, HR management tools, Hospital management tools during 2021. It is our ambition to constantly pioneer new innovations in the field of innovative production, because we want you, as our customers, to be the market leaders of tomorrow and to remain in that position for decades to come. In order to do this successfully, we are tirelessly monitoring economic changes as they occur. Also, we are keeping a close eye on new technological prospects, even beyond the boundaries of the metals industry itself. I can say that the combined efforts of our own extensive research and our collaboration-based innovations have allowed us to widen our portfolio and further improve existing solutions.";

  const cooContent =
    "First, let me start by acknowledging what an honor it is to be a part of Algo Solver's Chief Operating Officer. I started my journey with Algo Solver as Co-founder and COO last year  and what an amazing journey it's been. While we've accomplished a tremendous amount, when I look at the opportunities that lie ahead, in many ways I feel like we are just getting started. We added significantly to: our product offerings, our technical capabilities, our global footprint and customer base, and our team of incredibly talented individuals. Because of the dedication, professionalism and grit of our employees, Algo Solver is emerging stronger than ever. Again, thanks to all of you that made this possible.";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul>{dots}</ul>;
    },
  };

  return (
    <div style={{ backgroundColor: "#f3fdff" }} className={"py-16 my-8"}>
      <Slider
        {...settings}
        infinite={true}
        autoplay={true}
        autoplaySpeed={6000}
      >
        <ManagementSpeechSlideItem
          img={"Assets/management/Photo-2.webp"}
          title={"CEO"}
          content={ceoContent}
          position={"Zunayed Mahfuz, Chief Executive Officer"}
          signature={"Assets/management/signature/CEO.webp"}
        />
        <ManagementSpeechSlideItem
          img={"Assets/management/Photo.webp"}
          title={"CTO"}
          content={ctoContent}
          position={"Wasfi Ahad, Chief Technology Officer"}
          signature={"Assets/management/signature/CTO.webp"}
        />
        <ManagementSpeechSlideItem
          img={"Assets/management/Photo-1.webp"}
          title={"COO"}
          content={cooContent}
          position={"Md Mominul Islam Momin, Chief Operating Officer"}
          signature={"Assets/management/signature/COO.webp"}
        />
      </Slider>
    </div>
  );
};

export default SubMessageFromManagements;
