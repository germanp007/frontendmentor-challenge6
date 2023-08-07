import image1 from "../../images/mobile/image-gallery-cone.jpg";
import image2 from "../../images/mobile/image-gallery-milkbottles.jpg";
import image3 from "../../images/mobile/image-gallery-sugar-cubes.jpg";
import image4 from "../../images/mobile/image-gallery-orange.jpg";
import image1Desktop from "../../images/desktop/image-gallery-cone.jpg";
import image2Desktop from "../../images/desktop/image-gallery-milkbottles.jpg";
import image3Desktop from "../../images/desktop/image-gallery-sugarcubes.jpg";
import image4Desktop from "../../images/desktop/image-gallery-orange.jpg";
import { useEffect, useState } from "react";

const Gallery = () => {
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
    <div className="grid grid-cols-2 md:grid-cols-4 max-h-[60vh]">
      <img
        src={windowWidth >= 760 ? image2Desktop : image2}
        alt={image2}
        className="md:h-full"
      />
      <img
        src={windowWidth >= 760 ? image4Desktop : image4}
        alt={image4}
        className="md:h-full"
      />
      <img
        src={windowWidth >= 760 ? image1Desktop : image1}
        alt={image1}
        className="md:h-full"
      />
      <img
        src={windowWidth >= 760 ? image3Desktop : image3}
        alt={image3}
        className="md:h-full"
      />
    </div>
  );
};

export default Gallery;
