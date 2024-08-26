import { Link } from "react-router-dom";

type Props = {
  image: string;
  title?: string;
  link?: string;
};
const FoodLocations = ({ image, title, link }: Props) => {
  return (
    <section>
      {/* <div className="flex flex-col gap-5"> */}
      <div>
        <div className="flex flex-col gap-4">
          <img
            src={image}
            alt="food-image"
            className="h-[350px] w-[450px] rounded"
          />
          <div className="text-3xl">{title}</div>
          <Link
            to={`${link}`}
            className="w-fit rounded bg-gray-300 px-5 py-2 transition duration-300 hover:bg-gray-200 hover:text-white"
          >
            VISIT
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FoodLocations;
