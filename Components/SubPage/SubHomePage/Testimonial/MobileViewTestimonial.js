import { Carousel } from "react-responsive-carousel";
import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const MobileViewTestimonial = ({ comments: loaded }) => {
  // const loaded = [
  //   {
  //     id: 1,
  //     img: "https://cdn.dribbble.com/users/5216574/screenshots/14622730/gian_4x.jpg",
  //     name: "Takeshi Gian",
  //     message:
  //       "1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id: 2,
  //     img: "https://i.pinimg.com/originals/27/3b/bf/273bbfe5aa5f6b5e3bdc33714c0a1c63.jpg",
  //     name: "Suneo Honekawa",
  //     message:
  //       "2.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id: 3,
  //     img: "https://www.nicepng.com/png/detail/252-2524314_charming-shizuka-shizuka-doraemon.png",
  //     name: "Sizuka",
  //     message:
  //       "3.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id: 4,
  //     img: "https://www.anime-planet.com/images/characters/24800.jpg?t=1569801761",
  //     name: "Kouji Tongari",
  //     message:
  //       "4.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id: 5,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCQwpU1A8D9efvsmH_bu1QHUjPf1hg0MAk-Pe3r5ZuDZumfR6HDVUVH96XofiiupPpaM&usqp=CAU",
  //     name: "Kiteretsu",
  //     message:
  //       "5.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id: 6,
  //     img: "https://cdn-japantimes.com/wp-content/uploads/2013/03/nn20120216a7a.jpg",
  //     name: "Kanzo Hattori",
  //     message:
  //       "6.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id: 7,
  //     img: "https://www.goodmorningimagesforlover.com/wp-content/uploads/2018/09/the-picture-of-doraemon.jpg",
  //     name: "Doraemon",
  //     message:
  //       "7.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  // ];
  const [currentActiveId, setCurrentActiveId] = React.useState(1);
  return (
    <div
      className="w-full h-60 mt-12 mb-12 md:hidden"
      style={{
        backgroundColor: "#BAFFD8",
      }}
    >
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
        renderArrowNext={(onClickHandler) => {
          return (
            <BsFillArrowRightCircleFill
              onClick={onClickHandler}
              className="text-xl m-2 z-10 absolute"
              style={{ top: "50%", right: "0%", transform: "translateY(-50%)" }}
            />
          );
        }}
        renderArrowPrev={(onClickHandler) => {
          return (
            <BsFillArrowLeftCircleFill
              onClick={onClickHandler}
              className="text-xl m-2 z-10 absolute"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          );
        }}
      >
        {loaded.map((obj, index) => (
          <div
            key={index}
            className="bg-black flex flex-col justify-center items-center text-black h-60 w-full"
            style={{
              backgroundColor: "#BAFFD8",
            }}
          >
            <div className="flex flex-row items-center justify-center">
              <img src="/Assets/icon-home-quote.webp" className="h-8 " alt="" />
            </div>
            <div className="flex flex-row items-center justify-center px-8 mt-3 mb-4">
              <p className="text-center text-sm">
                {`"${
                  obj?.message?.length < 100
                    ? obj?.message + ""
                    : obj?.message?.substring(0, 100) + "..."
                }"`}
              </p>
            </div>
            <div className="flex flex-row items-center justify-center px-8">
              <div
                className="rounded-full h-12 w-12 bg-gray-100 shadow-md"
                style={{
                  border: "2px solid white",
                  background: `url('${obj.img}') center/cover no-repeat`,
                }}
              ></div>
              <p className="font-semibold ml-2">
                {obj?.name}
                {/* {obj?.name?.length < 15
                  ? obj?.name + ""
                  : obj?.name?.substring(0, 12) + "..."} */}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default MobileViewTestimonial;
