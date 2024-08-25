import HomeSectionTwoImage1 from "../../assets/HomeSectionTwoImage1.jpg";

const HomeSectionTwo = () => {
  return (
    <div>
      <div className="w-full">
        <div className="">
          <img
            src={HomeSectionTwoImage1}
            alt=""
            className="xs:h-[240px] sm:h-auto md:h-auto lg:h-auto"
          />
          {/* drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] = TEXT SHADOW */}
          {/* drop-shadow-[0_2px_2px_rgba(0,0,0,1)] = TEXT SHADOW */}
          {/* <div className="absolute mx-auto w-[50%] text-center text-5xl text-white drop-shadow-2xl xs:left-[120px] xs:top-[20px] xs:text-base sm:left-[300px] sm:top-[100px] sm:text-3xl md:left-[300px] md:top-[100px] md:text-4xl lg:left-[430px] lg:top-[150px]"> */}
          <div className="mx-auto w-[50%] text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:mt-[-30%] xs:text-base sm:mt-[-25%] sm:text-3xl md:mt-[-25%] md:text-4xl lg:mt-[-25%] lg:text-5xl">
            The Grandis is a lifestyle destination combining office, dining,
            art, and activations to create exciting experiences.
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeSectionTwo;
