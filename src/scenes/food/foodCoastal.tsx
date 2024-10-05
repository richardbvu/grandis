import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Coastal1.webp";
import Image2 from "../../assets/Coastal2.webp";
import Image3 from "../../assets/Coastal3.webp";
import Image4 from "../../assets/Coastal4.webp";

const FoodCoastal = () => {
  return (
    <section>
      <FoodLocationDetails
        title="Coastal Foreign"
        description="A culinary oasis that brings together the vibrant flavors of the world's coastal regions. Nestled by the water's edge, this restaurant offers a unique dining experience where the sea meets the land, and cultures collide in a harmonious blend of taste and tradition"
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        week="11am-10pm"
        friday="11am-10pm"
        saturday="10am-11pm"
        sunday="12am-9pm"
      />
    </section>
  );
};
export default FoodCoastal;
