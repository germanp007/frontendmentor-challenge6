import Navbar from "./components/Navbar";
import orange from "../images/mobile/image-header.jpg";
import arrow from "../images/icon-arrow-down.svg";
const App = () => {
  return (
    <main>
      <article
        className="h-[80vh] bg-cover bg-no-repeat text-[18px] font-Barlow"
        style={{ backgroundImage: `url(${orange})` }}
      >
        <Navbar />
        <div className="h-[50vh] flex flex-col ">
          <h1 className="text-[2.4rem] text-center font-Fraunces uppercase text-White tracking-widest mt-8">
            {" "}
            We are <br /> creatives
          </h1>
          <img src={arrow} alt="" className="w-[45px] m-auto" />
        </div>
        <div></div>
      </article>
    </main>
  );
};

export default App;
