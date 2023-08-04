import Navbar from "./components/Navbar";
import orangeMobile from "../images/mobile/image-header.jpg";
import orangeDesktop from "../images/desktop/image-header.jpg";
import cherry from "../images/mobile/image-graphic-design.jpg";
import tangerine from "../images/mobile/image-photography.jpg";
import egg from "../images/mobile/image-transform.jpg";
import cup from "../images/mobile/image-stand-out.jpg";
import TextComponent from "./components/TextComponent";
import HeroComponent from "./components/HeroComponent";
import Article from "./components/Article";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        className={`h-[80vh] bg-cover bg-no-repeat bg-center text-[18px] font-Barlow bg`}
        style={{
          backgroundImage: `url(${
            windowWidth <= 650 ? orangeMobile : orangeDesktop
          })`,
        }}
      >
        <Navbar />
        <HeroComponent />
      </section>
      <section className="tablet:grid grid-cols-2 ">
        <div className="order-2">
          <img src={egg} alt="egg" />
        </div>
        <TextComponent
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
          color="bg-Yellow"
          order="order-1"
        />
        <div className="order-3">
          <img src={cup} alt="egg" />
        </div>
        <TextComponent
          title=" Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ."
          color="bg-Soft-red"
          order="order-4"
        />
      </section>
      <section>
        <Article
          title=" Graphic design"
          text="Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients’ attention."
          color="text-Dark-desaturated-cyan"
          image={cherry}
        />
        <Article
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          color="text-Dark-blue"
          image={tangerine}
        />
      </section>

      <Testimonials />

      <section>
        <Gallery />
      </section>
      <Footer />
    </>
  );
};

export default App;
