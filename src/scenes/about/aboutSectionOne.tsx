import { motion } from "framer-motion";
import AboutSection1 from "../../assets/AboutSection1.jpg";
motion;

const AboutSectionOne = () => {
  return (
    <section>
      <div className="w-full">
        <div>
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            src={AboutSection1}
            alt=""
            // className="xs:h-[340px] sm:h-auto md:h-auto lg:h-auto"
            className="h-[500px] w-full object-cover"
          />
          <div className="mx-auto mt-[-300px] w-[50%] text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Welcome to The Grandis!
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionOne;
