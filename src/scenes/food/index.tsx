import FoodLocations from "./foodLocations";
import Food1 from "../../assets/Food1.jpg";
import Food2 from "../../assets/Food2.jpg";
import Food3 from "../../assets/Pho5.jpg";
import Food4 from "../../assets/Marigold3.jpg";
import Food5 from "../../assets/Food5.jpg";
import Food6 from "../../assets/Oak3.jpg";
import Food7 from "../../assets/Food7.jpg";
import Food8 from "../../assets/Food8.jpg";
import Food9 from "../../assets/Food9.jpg";

const foods = [
  {
    image: Food1,
    title: "Sally's Super Salad",
    link: "sallys-super-salad",
  },
  {
    image: Food2,
    title: "Blue Horizon Bistro",
    link: "blue-horizon-bistro",
  },
  {
    image: Food3,
    title: "Velvet Pho",
    link: "velvet-pho",
  },
  {
    image: Food4,
    title: "Marigold Desserts",
    link: "marigold-desserts",
  },
  {
    image: Food5,
    title: "Coastal Foreign",
    link: "coastal-foreign",
  },
  {
    image: Food6,
    title: "The Savory Oak",
    link: "the-savory-oak",
  },
  {
    image: Food7,
    title: "Olive & Juni",
    link: "olive-and-juni",
  },
  {
    image: Food8,
    title: "The Whispering",
    link: "the-whispering",
  },
  {
    image: Food9,
    title: "Radiant Ember Tavern",
    link: "radiant-ember-tavern",
  },
];

const Food = () => {
  return (
    <section className="mt-[100px]">
      <div className="flex w-full flex-col items-center">
        {/* OPEN LOCATIONS */}
        <div className="grid gap-10 px-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
