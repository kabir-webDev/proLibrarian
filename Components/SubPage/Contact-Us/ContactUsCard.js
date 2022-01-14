const ContactusCard = ({ title, subTitle, isInverted, iconLoc }) => {
  return (
    <div
      className="w-306 relative border overflow-hidden p-6 flex flex-col items-center justify-center rounded-md"
      style={{
        height: "auto",
        backgroundColor: `${isInverted ? "#0e497b" : "#ffff"}`,
        color: `${isInverted ? "white" : "black"}`,
        border: "2px solid #0e497b",
      }}>
      <img src={iconLoc} className="mb-2" />

      <p className="text-lg font-bold pb-3 px-2 text-center">{title}</p>
      <p className="text-xs pb-4 px-4 text-center">{subTitle}</p>
    </div>
  );
};
export default ContactusCard;
