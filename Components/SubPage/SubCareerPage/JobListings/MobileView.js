import EachMobileCard from "./EachMobileCard";
const MobileView = ({ data, limit }) => {
  return (
    <div
      style={{
        transform: "translateY(-2.5rem)",
      }}
      className="container flex flex-col flex-wrap items-center justify-center tracking-wide md:hidden">
      {data.map((obj, index) => {
        if(index < limit){
          return (
            <EachMobileCard data={obj} key={index} />
          )
        }
      })}
    </div>
  );
};
export default MobileView;
