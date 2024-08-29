import { Link } from "react-router-dom";
import HomeSectionFourImage1 from "../../assets/HomeSectionFourImage1.jpg";

const HomeSectionFour = () => {
  return (
    <section>
      <div>
        <div>
          <img
            src={HomeSectionFourImage1}
            alt="home-section-four-image"
            className="h-[500px] w-full object-cover"
          />
        </div>
        <div className="flex w-full justify-end">
          <div className="mr-10 mt-[-350px] w-[50%] text-end text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Los Angeles & Orange County have converged to establish a dining
            experience unlike anything in Southern California.
            <div>
              {/* <button className="mt-10 w-fit text-white">
                <Link to={"food"}>
                  <div className="min-w-[300px] rounded-lg bg-primary-100 px-10 py-5 text-lg transition duration-[300ms] hover:bg-primary-200 xs:min-w-[40px] xs:px-5 xs:py-2 sm:min-w-[100px]">
                    View Restaurants
                  </div>
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSectionFour;
