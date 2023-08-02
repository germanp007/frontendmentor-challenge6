import arrow from "../../images/icon-arrow-down.svg";
const HeroComponent = () => {
  return (
    <div className="h-[50vh] mt-5 flex flex-col ">
      <h1 className="text-[2.4rem] text-center font-Fraunces uppercase text-White tracking-widest mt-8">
        {" "}
        We are <br /> creatives
      </h1>
      <img src={arrow} alt="" className="w-[40px] mx-auto mt-8" />
    </div>
  );
};

export default HeroComponent;
