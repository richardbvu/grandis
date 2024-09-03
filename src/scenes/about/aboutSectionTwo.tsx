import { LazyLoadImage } from "react-lazy-load-image-component";
import AboutSection2 from "../../assets/AboutSection2.jpg";

const AboutSectionTwo = () => {
  return (
    <section className="mx-auto mt-[100px] w-[90%]">
      <div className="mx-auto flex w-[90%] gap-20 xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        {/* <div className="mx-auto flex h-[450px] basis-6/12"> */}
        <div className="mx-auto flex h-[450px] basis-6/12 justify-center">
          <LazyLoadImage
            src={AboutSection2}
            alt="home-section-three-image"
            className="aspect-auto rounded"
          />
        </div>
        <div className="relative mx-auto flex basis-6/12 items-center justify-center xs:text-center xs:text-lg sm:text-start sm:text-2xl md:text-start md:text-3xl lg:text-start lg:text-4xl">
          <div className="flex flex-col xs:gap-5 md:gap-10">
            <p className="xs:text-center sm:text-center md:text-start lg:text-start">
              The Grandis is a collection of premier office space, curated
              restaurants, activated outdoor common areas, art installations,
              and year-round events.
            </p>
            <div className="my-5 xs:text-center xs:text-base sm:text-center sm:text-lg md:text-start md:text-2xl lg:text-start lg:text-3xl">
              <p>912 W 111th St Torrance </p>
              <p>Torrance, CA 90502</p>
              <a href="tel:5551234512">(555) 123-4512</a>
            </div>
          </div>
          {/* CIRCLE BACKGROUND */}
          <div className="z-[-10] before:absolute before:right-[10%] before:top-[45%] before:content-arrow xs:hidden md:flex"></div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionTwo;
