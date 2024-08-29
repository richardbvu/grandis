import HomeSectionThreeImage1 from "../../assets/HomeSectionThreeImage1.jpg";

const HomeSectionThree = () => {
  return (
    <section className="mx-auto mt-[150px] w-[90%]">
      <div className="mx-auto flex w-[90%] gap-10 xs:flex-col sm:flex-row md:flex-row lg:flex-row">
        <div className="relative mx-auto flex basis-6/12 items-center justify-center xs:text-center xs:text-2xl sm:text-start sm:text-2xl md:text-start md:text-3xl lg:text-start lg:text-4xl">
          We’ve made it easier to attract & retain employees by developing a
          lifestyle environment to complement the 500K SF Class “A" office
          space.
          <div className="z-[-10] before:absolute before:left-[70%] before:top-[1%] before:content-abstractwaves"></div>
        </div>
        <div className="mx-auto flex basis-6/12">
          <img
            src={HomeSectionThreeImage1}
            alt="home-section-three-image"
            className="h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeSectionThree;
