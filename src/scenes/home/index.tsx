import HomeHero from "./homeHero";
import HomeSectionOne from "./homeSectionOne";
import HomeSectionTwo from "./homeSectionTwo";
import HomeSectionThree from "./homeSectionThree";
import HomeSectionFour from "./homeSectionFour";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-[150px]">
        {/* HOME HERO */}
        <HomeHero />
        {/* HOME SECTION ONE*/}
        <HomeSectionOne />
        {/* HOME SECTION TWO*/}
        <HomeSectionTwo />
        {/* HOME SECTION Three*/}
        <HomeSectionThree />
        {/* HOME SECTION Four*/}
        <HomeSectionFour />
      </div>
    </div>
  );
};
export default Home;
