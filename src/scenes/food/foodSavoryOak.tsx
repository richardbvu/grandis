import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Oak1.webp";
import Image2 from "../../assets/Oak2.webp";
import Image3 from "../../assets/Oak3.webp";
import Image4 from "../../assets/Oak4.webp";
import Image5 from "../../assets/Oak5.webp";
import Image6 from "../../assets/Oak6.webp";

const FoodSavoryOak = () => {
  return (
    <section>
      <FoodLocationDetails
        title="The Savory Oak"
        description="A cozy, wood-themed burger joint, known for its rustic charm and mouthwatering gourmet burgers, The Savory Oak offers a unique dining experience where quality meets creativity. Each burger is crafted using locally sourced, organic ingredients, with patties made from premium grass-fed beef, free-range chicken, or plant-based alternatives. The menu features a variety of signature burgers, each paired with house-made sauces and freshly baked brioche buns."
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        image5={Image5}
        image6={Image6}
        week="9am-10pm"
        friday="9am-10pm"
        saturday="9am-11pm"
        sunday="12am-9pm"
      />
    </section>
  );
};
export default FoodSavoryOak;
