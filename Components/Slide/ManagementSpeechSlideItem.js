const ManagementSpeechSlideItem = ({
  img,
  title,
  content,
  position,
  signature,
}) => {
  return (
    <div className="mt-5 flex w-full flex-wrap justify-center items-center lg:items-start  3xl:gap-20 xl:gap-10 md:gap-8">
      <div className={"3xl:w-649 xl:w-475 w-315 relative flex justify-end"}>
        <img
          src="/mask_group_one.webp"
          className={
            "xl:w-406 h-263 w-257 xl:h-417 w-full absolute left-0 top-0"
          }
        />
        <img
          src={`/${img}`}
          alt=""
          className={
            "3xl:h-519 w-279 h-289 xl:w-390 3xl:w-517 xl:h-405 mt-20 z-10 object-cover object-center"
          }
        />
      </div>

      <div className="w-459 mt-16 lg:-mt-1 px-10 lg:px-0 flex md:pt-8 lg:pt-20  flex-col justify-end items-start">
        <h2
          className={
            "text-xl xl:text-3xl 3xl:text-4xl pb-1 xl:pb-2 3xl:pb-3 font-bold"
          }
          style={{ color: "#222a41" }}
        >
          Message from {title}
        </h2>
        <h2
          className={
            "text-base xl:text-lg 3xl:text-xl 3xl:pb-1 xl:pb-1 font-bold text-gray-600"
          }
        >
          The thing about us
        </h2>
        <p
          className="text-xs font-light md:text-sm 3xl:text-base py-2 mt-2 lg:mt-0"
          style={{ color: "#222a41" }}
        >
          {content}
        </p>

        <div className="w-full mt-4  md:mt-4 lg:mt-10 3xl:mt-20 3xl:pb-4 pb-2">
          <img src={`/${signature}`} alt="" className="h-10" />
        </div>
        <p
          className="3xl:text-base mt-2 lg:mt-0 text-sm"
          style={{ color: "#222a41" }}
        >
          {position}
        </p>
      </div>
    </div>
  );
};

export default ManagementSpeechSlideItem;
