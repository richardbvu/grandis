import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  link: string;
};
const FoodLocations = ({ image, title, link }: Props) => {
  return (
    <section>
      <Link
        to={`${link}`}
        className="transition duration-300 hover:text-primary-100"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-4"
        >
          <img
            src={image}
            alt="food-image"
            className="h-[300px] w-[400px] rounded"
          />
          <div className="w-fit text-3xl">{title}</div>
          {/* <Link
            to={`${link}`}
            className="w-fit rounded bg-gray-300 px-5 py-2 transition duration-300 hover:bg-gray-200 hover:text-white"
          >
            VISIT
          </Link> */}
        </motion.div>
      </Link>
    </section>
  );
};
export default FoodLocations;
