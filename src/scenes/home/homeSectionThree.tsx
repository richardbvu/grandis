import HomeSectionThreeImage1 from "../../assets/HomeSectionThreeImage1.jpg";

const HomeSectionThree = () => {
  return (
    <section className="mx-auto w-[90%] xs:mt-[80px] sm:mt-[150px] md:mt-[250px] lg:mt-[300px]">
      {/* <div className="mx-auto mt-[300px] w-[90%]"> */}
      <div className="mx-auto flex w-[90%] gap-10 xs:flex-col sm:flex-row md:flex-row lg:flex-row">
        <div className="relative mx-auto flex basis-6/12 items-center justify-center xs:text-center xs:text-lg sm:text-start sm:text-2xl md:text-start md:text-3xl lg:text-start lg:text-4xl">
          We’ve made it easier to attract & retain employees by developing a
          lifestyle environment to complement the 500K SF Class “A" office
          space.
          <div className="z-[-10] before:absolute before:left-[70%] before:top-[1%] before:content-abstractwaves"></div>
          {/* <div className="before:content-sparkles z-[-10] before:absolute before:-left-[20%] before:top-[70%]"></div> */}
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
