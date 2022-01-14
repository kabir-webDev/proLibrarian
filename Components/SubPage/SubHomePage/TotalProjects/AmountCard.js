const AmountCard = ({ title, amount}) => {
    return (
      <div className="">
        <div
            className="flex flex-col gap-3 p-1 justify-center text-center"
            style={{
              color: "#0e497b",
            }}>
            <div className=" font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:font-bold ">{`${amount}+`}</div>
            <div className="text-base md:text-lg font-normal xl:text-lg text-center"
            style={{
                color: "#222a41",
              }}
            >{title}</div>
          </div>
      </div>
    );
  };
  export default AmountCard;
  