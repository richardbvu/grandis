import { motion } from "framer-motion";
import EventsImg from "../../assets/EventsImg.png";

const Events = () => {
  return (
    <section className="py-[100px]">
      <div className="flex gap-[100px] px-20 xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        <div>
          <img
            src={EventsImg}
            alt="event-image"
            className="h-[660px] rounded xs:hidden sm:hidden md:flex"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-5xl text-primary-100">
            <div>WEEKLY EVENTS AT</div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="font-bold"
            >
              THE GRANDIS!
            </motion.div>
          </div>
          <div>
            <p className="text-2xl">
              Join us every week for fun, family & dog-friendly events!
            </p>
          </div>
          <div className="flex flex-col gap-5 text-lg">
            <div>
              <div>Wednesdays:</div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.4 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-primary-100"
              >
                Sunset Yoga, 5:30-6:30PM
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-primary-100"
              >
                Run Club, 6:45PM
              </motion.div>
            </div>
            <div>
              <div>Thursdays:</div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-primary-100"
              >
                Family Game Night, 5-7PM
              </motion.div>
            </div>
            <div>
              <div>Fridays:</div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-primary-100"
              >
                Live Music, 5-8PM
                {/* <div className="z-[-10] before:absolute before:left-[70%] before:top-[1%] before:content-sparkles"></div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
