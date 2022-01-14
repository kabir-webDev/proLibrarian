const ValueCard = ({ title, subTitle, isInverted, iconLoc }) => {
    return (
      <div
        className="
        w-56
        h-48
        md:w-80
        md:h-72
        relative shadow-lg overflow-hidden flex flex-col items-center justify-center mt-3 rounded-md"
        style={{
          backgroundColor: `${isInverted ? "#0e497b" : "#ffff"}`,
          color: `${isInverted ? "white" : "black"}`,
        }}>
        <img src={iconLoc} className="mb-2" />
  
        <p className="text-lg font-bold pb-3 px-2 text-center">{title}</p>
        <p className="text-xs pb-4 px-4 text-center">{subTitle}</p>
      </div>
    );
  };
  export default ValueCard;
  