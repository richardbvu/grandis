import { motion } from "framer-motion";
import HeroImage1 from "../../assets/HeroImage1.png";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeHero = () => {
  return (
    <section className="w-full">
      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <LazyLoadImage
            src={HeroImage1}
            alt="home-page-image"
            effect="blur"
            className="h-screen min-h-[500px] w-full object-cover"
          />
        </motion.div>
        {/* <div className="absolute top-[250px] flex flex-col gap-5 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:left-[100px] xs:items-center xs:gap-1 sm:left-[170px] sm:items-start md:left-[200px] md:items-start lg:left-[220px] lg:items-start"> */}
        <div className="absolute top-[25%] flex flex-col gap-5 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:left-[100px] xs:items-center xs:gap-1 sm:left-[170px] sm:items-start md:left-[200px] md:items-start lg:left-[220px] lg:items-start">
          <p className="text-white xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
            Your place to explore
          </p>
          <p className="mb-5 italic text-white xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
            The Grandis
          </p>
          <p className="mb-2 text-white xs:text-sm sm:text-base md:text-2xl lg:text-2xl">
            Select restaurants open now!
          </p>
          <button className="w-fit text-white">
            <Link to={"food"}>
              <div className="min-w-[300px] rounded-lg bg-primary-100 px-10 py-5 text-lg transition duration-[300ms] hover:bg-primary-200 xs:min-w-[40px] xs:px-5 xs:py-2 sm:min-w-[100px]">
                View Restaurants
              </div>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
