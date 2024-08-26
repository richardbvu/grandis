import FoodLocations from "./foodLocations";
import Food1 from "../../assets/Food1.jpg";
import Food2 from "../../assets/Food2.jpg";

const foods = [
  {
    image: Food1,
    title: "Sally's Super Salad",
    link: "ramen",
  },
  {
    image: Food2,
    title: "Blue Horizon Bistro",
    link: "ramen",
  },
];

const FoodRamen = () => {
  return (
    <section className="mt-[100px]">
      <div className="flex w-full flex-col items-center">
        {/* <p className="mb-10 text-center text-5xl">NOW OPEN</p> */}
        {/* OPEN LOCATIONS */}
        <div className="grid grid-cols-3 gap-10">
          {foods.map((food, index) => (
            <FoodLocations
              key={index}
              image={food.image}
              title={food.title}
              link={food.link}
            ></FoodLocations>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FoodRamen;
