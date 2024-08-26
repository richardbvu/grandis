import HomeHero from "./homeHero";
import HomeSectionOne from "./homeSectionOne";
import HomeSectionTwo from "./homeSectionTwo";
import HomeSectionThree from "./homeSectionThree";
import HomeSectionFour from "./homeSectionFour";
import HomeSectionFive from "./homeSectionFive";

const Home = () => {
  return (
    <section>
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
        {/* HOME SECTION Five*/}
        <HomeSectionFive />
      </div>
    </section>
  );
};
export default Home;
