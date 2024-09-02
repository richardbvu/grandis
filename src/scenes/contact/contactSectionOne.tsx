import { motion } from "framer-motion";
import ContactImage1 from "../../assets/ContactImage1.jpg";

const ContactSectionOne = () => {
  return (
    <section className="w-full py-[100px]">
      <div className="mx-auto flex w-[50%] items-center justify-around gap-[100px] xs:flex-col sm:flex-col md:flex-col lg:flex-row">
        {/* IMAGE */}
        <div className="h-[330px] w-[500px] xs:order-2 sm:order-2 md:order-2 lg:order-1">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            src={ContactImage1}
            alt="Grandis-image"
            className="mx-auto rounded object-cover"
            // className="mx-auto h-[400px] w-[400px] rounded"
          />
        </div>
        {/* CONTACT INFORMATION */}
        <div className="text-nowrap xs:order-1 sm:order-1 md:order-1 lg:order-2">
          <div className="flex flex-col gap-5">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-4xl font-bold"
            >
              CONTACT US
            </motion.p>
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              href="tel:5551234512"
              className="text-lg"
            >
              (555) 123-4512
            </motion.a>
            <div className="text-lg">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                912 W 111th St Torrance
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Torrance, CA 90502
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSectionOne;
