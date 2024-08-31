import Office1 from "../../assets/Office1.jpg";

const OfficeSectionOne = () => {
  return (
    <section className="mb-[250px]">
      <div className="relative">
        <img
          src={Office1}
          alt="office-image"
          // className="h-[5000px] max-h-[87%] w-full object-cover"
          className="h-screen min-h-[500px] w-full object-cover"
        />
        <div className="absolute left-[25%] top-[25%] mx-auto w-[50%] text-nowrap text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <div className="mb-5 flex justify-center">Your new office is at</div>
          <div className="mx-auto flex justify-center italic">The Grandis.</div>
        </div>
      </div>
    </section>
  );
};
export default OfficeSectionOne;
