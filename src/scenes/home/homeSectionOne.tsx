import HomeSectionOneImages from "./homeSectionOneImages";
import HomeSectionOneImage1 from "../../assets/HomeSectionOneImage1.jpg";
import HomeSectionOneImage2 from "../../assets/HomeSectionOneImage2.jpg";
import HomeSectionOneImage3 from "../../assets/HomeSectionOneImage3.jpg";

const images = [
  {
    img: HomeSectionOneImage1,
  },
  {
    img: HomeSectionOneImage2,
  },
  {
    img: HomeSectionOneImage3,
  },
];

const HomeFirstSection = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[90%]">
        {/* TITLE */}
        <div className="mx-auto mb-5 flex max-w-[90%] xs:justify-center xs:text-2xl sm:justify-center sm:text-3xl md:justify-end md:text-3xl lg:justify-end lg:text-4xl">
          GOOD. GREAT. GRANDIS.
        </div>
        {/* IMAGES */}
        <div className="mx-auto flex max-w-[90%] justify-center gap-10 xs:flex-col sm:flex-col md:flex-row lg:flex-row">
          {images.map((image) => (
            <HomeSectionOneImages img={image.img} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomeFirstSection;
