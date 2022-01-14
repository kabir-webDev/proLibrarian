import Marquee from "react-fast-marquee";

const logos = [
  "/Assets/logos/1.svg",
  "/Assets/logos/2.svg",
  "/Assets/logos/3.svg",
  "/Assets/logos/4.svg",
  "/Assets/logos/5.svg",
  "/Assets/logos/6.svg",
  "/Assets/logos/7.svg",
  "/Assets/logos/8.svg",
  "/Assets/logos/9.svg",
  "/Assets/logos/10.svg",
  "/Assets/logos/11.svg",
  "/Assets/logos/12.svg",
  "/Assets/logos/13.svg",
  "/Assets/logos/14.svg",
  "/Assets/logos/15.svg",
];

const ClientLogo = () => {
  return (
    <div className="mt-8 mb-8 md:mt-10 md:mb-10 container">
      <Marquee speed={"80"} gradient={false} pauseOnHover={true}>
        {logos.map((obj, index) => (
          <div className="h-8 md:h-14 md:mr-20 flex mr-12 md:justify-center" key={index}>
            <img src={obj} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default ClientLogo;