import HomeSectionFourImage1 from "../../assets/HomeSectionFourImage1.jpg";

const HomeSectionFour = () => {
  return (
    <section>
      <div>
        <div>
          <img
            src={HomeSectionFourImage1}
            alt="home-section-four-image"
            // className="h-[500px] w-full"
          />
        </div>
        <div className="mr-[10%] mt-[-20%] text-end">
          <div></div>
          Los Angeles & Orange County have converged to establish a dining
          experience unlike anything in Southern California.
        </div>
      </div>
    </section>
  );
};
export default HomeSectionFour;
