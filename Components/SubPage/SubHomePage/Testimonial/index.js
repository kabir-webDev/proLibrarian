import React from "react";
import LargeViewTestimonial from "./LargeViewTestimonial";
import MobileViewTestimonial from "./MobileViewTestimonial";

const TestimonialSection = ({ comments: data }) => {
  // console.log(data);
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    let parsed = data.map((obj, index) => ({
      // id: obj?.id,
      id: index,
      // img: obj?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url || "https://www.stellenanzeigen.de/careeasy/wp-content/uploads/2020/01/L%C3%A4chelnde-Person.jpg",
      img: obj?.attributes?.image?.data?.attributes?.url,
      designation: obj?.attributes?.designation || "Product Manager",
      name: obj?.attributes?.name || "Bethany Martin",
      message: obj?.attributes?.remarks || "Awesome",
    }));
    setComments(parsed);
  }, [data]);
  return (
    <React.Fragment>
      {comments?.length === 7 && <LargeViewTestimonial comments={comments} />}
      {comments.length === 7 && <MobileViewTestimonial comments={comments} />}
    </React.Fragment>
  );
};

export default TestimonialSection;
