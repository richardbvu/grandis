import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Marigold1.jpg";
import Image2 from "../../assets/Marigold2.jpg";
import Image3 from "../../assets/Marigold3.jpg";
import Image4 from "../../assets/Marigold4.jpg";
import Image5 from "../../assets/Marigold5.jpg";
import Image6 from "../../assets/Marigold6.jpg";

const FoodMarigold = () => {
  return (
    <section>
      <FoodLocationDetails
        title="Marigold Desserts"
        description="A charming and cozy dessert café that specializes in indulgent, handcrafted sweet treats. Nestled in the heart of the city, Marigold Desserts offers a warm and inviting atmosphere where guests can enjoy an array of delectable desserts made from the finest ingredients."
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        image5={Image5}
        image6={Image6}
        week="11am-11pm"
        friday="11am-11pm"
        saturday="11am-11pm"
        sunday="11am-8pm"
      />
    </section>
  );
};
export default FoodMarigold;
