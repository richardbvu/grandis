import { motion } from "framer-motion";
import ArtImage1 from "../../assets/ArtImage1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArtSectionOne = () => {
  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <LazyLoadImage
          src={ArtImage1}
          alt="home-page-image"
          className="h-[820px] w-full object-cover"
        />
      </motion.div>
      <div className="absolute top-[300px] flex flex-col gap-5 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:left-[50px] xs:items-start xs:gap-1 sm:left-[120px] sm:items-start md:left-[200px] md:items-start lg:left-[200px] lg:items-start">
        <p className="w-[40%] text-white xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          Home to a curated art collection that features local artists from Los
          Angeles.
        </p>
        <p className="mb-5 mt-10 italic text-white xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          The Grandis
        </p>
      </div>
    </section>
  );
};
export default ArtSectionOne;
