import HomeSectionFourImage1 from "../../assets/HomeSectionFourImage1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeSectionFour = () => {
  return (
    <section>
      <div>
        <div>
          <LazyLoadImage
            src={HomeSectionFourImage1}
            alt="home-section-four-image"
            className="h-[500px] w-full object-cover"
          />
        </div>
        <div className="flex w-full justify-end">
          <div className="mr-10 mt-[-350px] w-[50%] text-end text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Los Angeles & Orange County have converged to establish a dining
            experience unlike anything in Southern California.
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSectionFour;
