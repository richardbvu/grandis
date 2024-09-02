import { LazyLoadImage } from "react-lazy-load-image-component";
import OfficeSectionTwoImage1 from "../../assets/OfficeSection2Image1.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

const OfficeSectionTwo = () => {
  return (
    <section className="mx-auto mt-[-250px] w-[90%]">
      <div className="mx-auto flex w-[90%] gap-10 xs:flex-col sm:flex-row md:flex-row lg:flex-row">
        <div className="mx-auto flex basis-6/12">
          <LazyLoadImage
            src={OfficeSectionTwoImage1}
            alt="home-section-three-image"
            className="h-auto rounded"
            effect="blur"
          />
        </div>
        <div className="relative mx-auto flex basis-6/12 items-center justify-center xs:text-center xs:text-2xl sm:text-start sm:text-2xl md:text-start md:text-3xl lg:text-start lg:text-4xl">
          We turn the workplace into an engaging and collaborative experience
          while being surrounded by like-minded individuals.
          <div className="z-[-10] before:absolute before:left-[70%] before:top-[1%] before:content-sparkles xs:hidden sm:hidden md:flex"></div>
        </div>
      </div>
    </section>
  );
};
export default OfficeSectionTwo;
