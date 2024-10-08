import HomeSectionThreeImage1 from "../../assets/HomeSectionThreeImage1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HomeSectionThree = () => {
  return (
    <section className="mx-auto mt-[150px] w-[90%]">
      <div className="mx-auto flex min-h-[400px] w-[90%] gap-10 xs:flex-col sm:flex-row md:flex-row lg:flex-row">
        <div className="relative mx-auto flex basis-6/12 items-center justify-center xs:text-center xs:text-2xl sm:text-start sm:text-2xl md:text-start md:text-3xl lg:text-start lg:text-4xl">
          We’ve made it easier to attract & retain employees by developing a
          lifestyle environment to complement the 500K SF Class “A" office
          space.
          <div className="z-[-10] before:absolute before:left-[70%] before:top-[1%] before:content-abstractwaves xs:hidden sm:hidden md:flex"></div>
        </div>
        <div className="mx-auto flex basis-6/12">
          <LazyLoadImage
            src={HomeSectionThreeImage1}
            alt="home-section-three-image"
            className="h-auto rounded"
            // className="min-h-[300px] rounded"
            effect="blur"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeSectionThree;
