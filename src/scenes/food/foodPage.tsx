import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
          transition={{ duration: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-4"
        >
          <LazyLoadImage
            src={image}
            alt="food-image"
            className="h-[300px] w-[400px] rounded"
            effect="blur"
          />
          <div className="w-fit text-3xl">{title}</div>
        </motion.div>
      </Link>
    </section>
  );
};
export default FoodLocations;
