import EachJobLargeCard from "./EachJobLargeCard";
const LargeView = ({ data, limit }) => {
  return (
    <div
      style={{
        transform: "translateY(-4rem)",
      }}
      className="container flex-col flex-wrap items-center justify-center tracking-wide hidden md:flex">
      {data.map((obj, index) => {
        if(index < limit){
          return (
            (
              <EachJobLargeCard data={obj} key={index} />
            )
          )
        }
      })}
    </div>
  );
};
export default LargeView;
