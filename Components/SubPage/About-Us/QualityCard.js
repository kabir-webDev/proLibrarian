const QualityCard = ({ title, subTitle, iconLoc }) => {
  return (
    <div className="w-340 relative overflow-hidden flex flex-row h-auto gap-5 mt-3">
      <div
        className="flex items-center justify-center px-4 py-4 w-1/3"
        style={{
          backgroundColor: "#ebf6ff",
        }}
      >
        <img src={iconLoc} height={5} className="h-10 w-10" />
      </div>
      <div
        className="flex flex-col gap-2 p-1 justify-center w-2/3"
        style={{
          color: "#5e5e5e",
        }}
      >
        <p className="text-base md:text-lg font-bold">{title}</p>
        <p className="text-xs md:text-sm">{subTitle}</p>
      </div>
    </div>
  );
};
export default QualityCard;
