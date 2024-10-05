import { motion } from "framer-motion";
import Office1 from "../../assets/Office1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OfficeSectionOne = () => {
  return (
    <section className="mb-[250px]">
      <div className="relative">
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
            src={Office1}
            alt="office-image"
            className="h-screen min-h-[500px] w-full object-cover"
          />
        </motion.div>
        <div className="absolute left-[25%] top-[25%] mx-auto w-[50%] text-nowrap text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <div className="mb-5 flex justify-center">Your new office is at</div>
          <div className="mx-auto flex justify-center italic">The Grandis.</div>
        </div>
      </div>
    </section>
  );
};
export default OfficeSectionOne;
