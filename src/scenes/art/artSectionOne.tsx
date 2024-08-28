import ArtImage1 from "../../assets/ArtImage1.jpg";

const ArtSectionOne = () => {
  return (
    <section>
      <img
        src={ArtImage1}
        alt="home-page-image"
        className="w-fit xs:h-[400px] sm:h-auto md:h-auto lg:h-auto"
      />
      <div className="absolute flex flex-col gap-5 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:left-[50px] xs:top-[200px] xs:items-start xs:gap-1 sm:left-[120px] sm:top-[200px] sm:items-start md:left-[200px] md:top-[300px] md:items-start lg:left-[200px] lg:top-[300px] lg:items-start">
        <p className="w-[40%] text-white xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Home to a curated art collection that features local artists from Los
          Angeles.
        </p>
        <p className="mb-5 mt-10 italic text-white xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
          The Grandis
        </p>
      </div>
    </section>
  );
};
export default ArtSectionOne;
