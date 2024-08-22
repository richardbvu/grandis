import { Link } from "react-router-dom";
import HeroImage from "../../assets/HeroImage.jpg";
import HeroImage1 from "../../assets/HeroImage1.png";

const Home = () => {
  return (
    <div>
      <div>
        {/* HOME PAGE - HERO IMAGE */}
        <div className="relative">
          <img src={HeroImage1} alt="home-page-image" className="w-fit" />

          <div className="xs:left-[100px] xs:top-[100px] absolute flex flex-col gap-5 drop-shadow-2xl sm:left-[200px] sm:top-[100px] md:left-[1px] md:top-[1px] lg:left-[220px] lg:top-[150px]">
            <p className="text-8xl text-white">Your place to explore</p>
            <p className="text-8xl italic text-white">The Grandis</p>
            <p className="text-2xl text-white">Select restaurants open now!</p>
            <button className="w-fit text-white">
              <Link to={"food"}>
                <div className="bg-primary-100 min-w-[300px] rounded-lg px-10 py-5 text-lg hover:font-bold">
                  View Restaurants
                </div>
              </Link>
            </button>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
