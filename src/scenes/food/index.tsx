import FoodLocations from "./foodLocations";
import Food1 from "../../assets/Food1.jpg";
import Food2 from "../../assets/Food2.jpg";
import Food3 from "../../assets/Food3.jpg";
import Food4 from "../../assets/Food4.jpg";
import Food5 from "../../assets/Food5.jpg";
import Food6 from "../../assets/Food6.jpg";
import Food7 from "../../assets/Food7.jpg";
import Food8 from "../../assets/Food8.jpg";
import Food9 from "../../assets/Food9.jpg";

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
  {
    image: Food3,
    title: "Velvet Guardian",
    link: "ramen",
  },
  {
    image: Food4,
    title: "Marigold Table",
    link: "ramen",
  },
  {
    image: Food5,
    title: "Coastal Foreign",
    link: "ramen",
  },
  {
    image: Food6,
    title: "The Savory Oak",
    link: "ramen",
  },
  {
    image: Food7,
    title: "Olive & Juni",
    link: "ramen",
  },
  {
    image: Food8,
    title: "The Whispering",
    link: "ramen",
  },
  {
    image: Food9,
    title: "Radiant Ember Tavern",
    link: "ramen",
  },
];

const Food = () => {
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
export default Food;
