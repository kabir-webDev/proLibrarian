import QualityCard from "./QualityCard";
const QualitySection = () => {
  return (
    <div className="flex justify-center gap-4 px-6 flex-wrap my-9 container">
      <QualityCard
        title={"Your Satisfaction"}
        subTitle={
          "Your satisfaction is our #1 priority supported by our top talents."
        }
        iconLoc={"Assets/about/star-like.svg"}
      />
      <QualityCard
        title={"Quality Work"}
        subTitle={
          "Our goal is to deliver a high quality product to you ensured by Test Engineering team."
        }
        iconLoc={"Assets/about/efficient.svg"}
      />
      <QualityCard
        title={"On Time Work"}
        subTitle={
          "Communication & transparency are our keys to achieve project timeline."
        }
        iconLoc={"Assets/about/on-time.svg"}
      />
    </div>
  );
};
export default QualitySection;
