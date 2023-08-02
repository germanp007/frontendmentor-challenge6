import Navbar from "./components/Navbar";
import orange from "../images/mobile/image-header.jpg";
import cherry from "../images/mobile/image-graphic-design.jpg";
import tangerine from "../images/mobile/image-photography.jpg";
import egg from "../images/mobile/image-transform.jpg";
import cup from "../images/mobile/image-stand-out.jpg";
import TextComponent from "./components/TextComponent";
import HeroComponent from "./components/HeroComponent";
import Article from "./components/Article";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <main>
      <section
        className="h-[80vh] bg-cover bg-no-repeat text-[18px] font-Barlow"
        style={{ backgroundImage: `url(${orange})` }}
      >
        <Navbar />
        <HeroComponent />
      </section>
      <section>
        <div>
          <img src={egg} alt="egg" />
        </div>
        <TextComponent
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
          color="bg-Yellow"
        />
        <div>
          <img src={cup} alt="egg" />
        </div>
        <TextComponent
          title=" Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ."
          color="bg-Soft-red"
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
    </main>
  );
};

export default App;
