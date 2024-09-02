import HomeSectionTwoImage1 from "../../assets/HomeSectionTwoImage1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeSectionTwo = () => {
  return (
    <section>
      <div className="w-full">
        <div>
          <LazyLoadImage
            src={HomeSectionTwoImage1}
            alt="Picnic-table-image"
            className="h-[500px] w-full object-cover"
          />
          <div className="mx-auto mt-[-310px] w-[50%] text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <p>
              The Grandis is a lifestyle destination combining office, dining,
              art, and activations to create exciting experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSectionTwo;
