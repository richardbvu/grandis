import { Link } from "react-router-dom";
import ErrorImg from "../../assets/errorImg.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  title: string;
  description: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  week: string;
  friday: string;
  saturday: string;
  sunday: string;
};
const FoodLocationDetails = ({
  title,
  description,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  week,
  friday,
  saturday,
  sunday,
}: Props) => {
  return (
    <section className="mt-[100px] w-full">
      <div className="mx-auto flex w-[90%] flex-col">
        {/* OPEN LOCATIONS */}
        <div className="flex justify-between xs:mb-[50px] xs:flex-col sm:mb-[50px] sm:flex-col sm:gap-2 md:flex-row md:gap-20 lg:flex-row lg:gap-20">
          {/* TITLE */}
          <div className="flex basis-3/5 flex-col lg:mb-10">
            <p className="text-5xl">{title}</p>
            <p className="my-10 text-lg">{description}</p>
          </div>
          {/* HOURS OF OPERATION */}
          <div className="flex basis-2/5 flex-col justify-center gap-3">
            <p>
              <span className="font-semibold">Mon-Thurs:</span> {week}
            </p>
            <p>
              <span className="font-semibold">Fri:</span> {friday}
            </p>
            <p>
              <span className="font-semibold">Sat:</span> {saturday}
            </p>
            <p>
              <span className="font-semibold">Sun:</span> {sunday}
            </p>
          </div>
        </div>
        {/* IMAGES */}
        <div className="grid min-h-[400px] xs:grid-cols-2 xs:gap-1 sm:grid-cols-2 sm:gap-1 md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <LazyLoadImage
              src={image1 || "null"}
              alt="food-image-1"
              onError={(e) => {
                e.currentTarget.src = ErrorImg;
              }}
              effect="blur"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <LazyLoadImage
              src={image2 || "null"}
              alt="food-image-2"
              onError={(e) => {
                e.currentTarget.src = ErrorImg;
              }}
              effect="blur"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <LazyLoadImage
              src={image3 || "null"}
              alt="food-image-3"
              onError={(e) => {
                e.currentTarget.src = ErrorImg;
              }}
              effect="blur"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <LazyLoadImage
              src={image4 || "null"}
              alt="food-image-4"
              onError={(e) => {
                e.currentTarget.src = ErrorImg;
              }}
              effect="blur"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <LazyLoadImage
              src={image5 || "null"}
              alt="food-image-5"
              onError={(e) => {
                e.currentTarget.src = ErrorImg;
              }}
              effect="blur"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <LazyLoadImage
              src={image6 || "null"}
              alt="food-image-6"
              onError={(e) => {
                e.currentTarget.src = ErrorImg;
              }}
              effect="blur"
            />
          </motion.div>
        </div>
        <div className="mt-[100px]">
          <Link to={"/food"}>
            <div className="mx-auto flex w-fit rounded bg-gray-300 p-5 hover:bg-gray-200 hover:text-white">
              <p>MORE RESTAURANTS</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FoodLocationDetails;
