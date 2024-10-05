import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Tavern1.webp";
import Image2 from "../../assets/Tavern2.webp";
import Image3 from "../../assets/Tavern3.webp";
import Image4 from "../../assets/Tavern4.webp";
import Image5 from "../../assets/Tavern5.webp";
import Image6 from "../../assets/Tavern6.webp";

const FoodTavern = () => {
  return (
    <section>
      <FoodLocationDetails
        title="Radiant Ember Tavern"
        description="At Radiant Ember, our menu is a celebration of traditional cuisine with a modern twist. From sizzling steaks seared to perfection to farm-fresh vegetables roasted in our wood-fired oven, every dish is crafted with care and passion. Our chefs take pride in using locally-sourced ingredients, ensuring that every bite is as fresh as it is flavorful."
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        image5={Image5}
        image6={Image6}
        week="8am-10pm"
        friday="8am-11pm"
        saturday="9am-11pm"
        sunday="12am-9pm"
      />
    </section>
  );
};
export default FoodTavern;
