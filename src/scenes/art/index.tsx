import ArtSectionOne from "./artSectionOne";
import ArtSectionTwo from "./artSectionTwo";
import ArtSectionThree from "./artSectionThree";

const Art = () => {
  return (
    <section className="flex flex-col gap-[150px]">
      <ArtSectionOne />
      <ArtSectionTwo />
      <ArtSectionThree />
    </section>
  );
};
export default Art;
