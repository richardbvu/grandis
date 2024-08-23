import HomeFirstSection from "./homeSectionOne";
import HomeHero from "./homeHero";
import HomeSecondSection from "./homeSecondSection";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-[150px]">
        {/* HOME HERO */}
        <HomeHero />
        {/* HOME FIRST SECTION */}
        <HomeFirstSection />
        {/* HOME SECOND SECTION */}
        <HomeSecondSection />
      </div>
    </div>
  );
};
export default Home;
