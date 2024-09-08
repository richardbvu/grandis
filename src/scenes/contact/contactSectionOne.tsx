import { motion } from "framer-motion";
import ContactImage1 from "../../assets/ContactImage1.jpg";

const ContactSectionOne = () => {
  return (
    <section className="w-full py-[100px]">
      <div className="mx-auto flex items-center justify-center gap-[100px] px-10 xs:flex-col sm:flex-col md:flex-col lg:flex-row">
        {/* IMAGE */}
        <div className="xs:order-2 sm:order-2 md:order-2 lg:order-1">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            src={ContactImage1}
            alt="Grandis-image"
            className="flex h-[400px] rounded object-cover xs:hidden sm:flex"
          />
        </div>
        {/* CONTACT INFORMATION */}
        <div className="text-nowrap xs:order-1 sm:order-1 md:order-1 lg:order-2">
          <div className="flex flex-col gap-5 xs:text-center lg:text-start">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.5, delay: 0.5 }}
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
                transition={{ duration: 0.5, delay: 0.6 }}
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
                transition={{ duration: 0.5, delay: 0.7 }}
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
