import { LazyLoadImage } from "react-lazy-load-image-component";
import ArtSection3Image1 from "../../assets/artSection3Image1.jpg";
import ArtSection3Image2 from "../../assets/artSection3Image2.jpg";
import ArtSection3Image3 from "../../assets/artSection3Image3.jpg";
import ArtSection3Image4 from "../../assets/artSection3Image4.jpg";
import ArtSection3Image5 from "../../assets/artSection3Image5.jpg";

const ArtSectionThree = () => {
  return (
    <section>
      <div className="grid gap-5 xs:grid-cols-1 xs:px-5 sm:grid-cols-2 sm:px-6 md:grid-cols-3 md:px-20 lg:grid-cols-3 lg:px-20">
        <LazyLoadImage src={ArtSection3Image1} alt="art-image-1" />
        <LazyLoadImage src={ArtSection3Image2} alt="art-image-2" />
        <LazyLoadImage src={ArtSection3Image3} alt="art-image-3" />
        <LazyLoadImage src={ArtSection3Image4} alt="art-image-4" />
        <LazyLoadImage src={ArtSection3Image5} alt="art-image-5" />
      </div>
    </section>
  );
};
export default ArtSectionThree;
