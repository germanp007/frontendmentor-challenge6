import image1 from "../../images/mobile/image-gallery-cone.jpg";
import image2 from "../../images/mobile/image-gallery-milkbottles.jpg";
import image3 from "../../images/mobile/image-gallery-sugar-cubes.jpg";
import image4 from "../../images/mobile/image-gallery-orange.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2">
      <img src={image2} alt={image1} />
      <img src={image4} alt={image2} />
      <img src={image1} alt={image3} />
      <img src={image3} alt={image4} />
    </div>
  );
};

export default Gallery;
