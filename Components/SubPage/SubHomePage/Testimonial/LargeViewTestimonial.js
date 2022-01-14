import React from "react";
const LargeViewTestimonial = ({ comments: loaded }) => {
  const activeStyle = {
    top: "60%",
    left: "40%",
    transform: "scale(1.4)",
    transition: "all 0.5s ease-in-out",
    border: "2px solid white",
  };
  const [positions, setPositions] = React.useState([
    {
      ...activeStyle,
    },
    {
      top: "20%",
      left: "5%",
      transition: "all 0.5s ease-in-out",
      border: "2px solid white",
      cursor: "pointer",
      transform: "scale(0.9)",
    },
    {
      top: "60%",
      left: "3%",
      transition: "all 0.5s ease-in-out",
      border: "2px solid white",
      cursor: "pointer",
      transform: "scale(0.8)",
    },
    {
      top: "65%",
      left: "15%",
      transition: "all 0.5s ease-in-out",
      border: "2px solid white",
      cursor: "pointer",
      transform: "scale(0.8)",
    },
    {
      top: "65%",
      left: "80%",
      transition: "all 0.5s ease-in-out",
      border: "2px solid white",
      cursor: "pointer",
      transform: "scale(0.8)",
    },
    {
      top: "15%",
      left: "90%",
      transition: "all 0.5s ease-in-out",
      border: "2px solid white",
      cursor: "pointer",
      transform: "scale(0.9)",
    },
    {
      top: "60%",
      left: "90%",
      transition: "all 0.5s ease-in-out",
      border: "2px solid white",
      cursor: "pointer",
      transform: "scale(0.8)",
    },
  ]);
  const [data, setData] = React.useState([
    { ...loaded[0], style: { ...activeStyle } },
    ...loaded
      .slice(1)
      .map((obj, index) => ({ ...obj, style: positions[index] })),
  ]);
  const [currentActiveId, setCurrentActiveId] = React.useState(0);
  const handleClick = async (obj, index) => {
    let toSet = [];
    let activeIndex = 0;
    positions.forEach((obj, i) => {
      if (JSON.stringify(obj) === JSON.stringify(activeStyle)) {
        activeIndex = i;
      }
    });
    for (let i = 0; i < positions.length; i++) {
      if (i === activeIndex) {
        toSet.push(positions[index]);
      } else if (i === index) {
        toSet.push({ ...activeStyle });
      } else {
        toSet.push(positions[i]);
      }
    }
    setCurrentActiveId(obj.id);
    setPositions([...toSet]);
  };
  var shuffleInterval = null;
  const active = loaded.find((obj) => obj.id === currentActiveId);
  React.useEffect(() => {
    clearInterval(shuffleInterval);
    shuffleInterval = setInterval(() => {
      let arr = [0, 1, 2, 3, 4, 5, 6];
      let index = arr.find((el) => loaded[el]?.id === currentActiveId);
      index++;
      if (index > 6) {
        index = 0;
      }
      let obj = loaded[index];
      handleClick({ ...obj }, index);
    }, 5000);
    return () => {
      clearInterval(shuffleInterval);
    };
  }, [positions]);
  return (
    <div
      className="relative w-full h-96 mt-12 mb-12 hidden md:block"
      style={{
        backgroundColor: "#dff0ff",
        overflow: "hidden",
      }}
    >
      <div
        className="h-8 absolute"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img src="/Assets/icon-home-quote.webp" alt="" />
      </div>
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "40%",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <p className="text-center text-lg">
          {`"${
            active?.message?.length < 100
              ? active?.message + ""
              : active?.message?.substring(0, 100) + "..."
          }"`}
        </p>
      </div>
      {/* <div
        className="absolute font-bold text-xl"
        style={{
          top: "65%",
          left: "560px",
          transition: "all 0.5s ease-in-out",
        }}>
        {active?.name}
      </div> */}
      {data.map((el, index) => {
        if (el.id === currentActiveId) {
          return (
            <div
              key={index}
              className="rounded-full absolute h-16 w-16 bg-gray-100 shadow-md md:mt-7 xl:mt-0"
              style={{
                ...positions[index],
                display: "inline",
                whiteSpace: "nowrap",
                background: `url('${el.img}') center/cover no-repeat`,
              }}
              onClick={() => {
                if (el.id !== currentActiveId) {
                  handleClick(el, index);
                }
              }}
            >
              <div
                style={{ transform: "translateY(100%) translateX(120%)" }}
                className="font-semibold text-sm"
              >
                {active?.name}
                {/* {active?.name?.length < 15
                  ? active?.name + ""
                  : active?.name?.substring(0, 12) + "..."} */}
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="rounded-full absolute h-16 w-16 bg-gray-100 shadow-md"
              style={{
                ...positions[index],
                background: `url('${el.img}') center/cover no-repeat`,
              }}
              onClick={() => {
                if (el.id !== currentActiveId) {
                  handleClick(el, index);
                }
              }}
            ></div>
          );
        }
      })}
    </div>
  );
};
export default LargeViewTestimonial;
