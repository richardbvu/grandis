import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Whispering1.webp";
import Image2 from "../../assets/Whispering2.webp";
import Image3 from "../../assets/Whispering3.webp";
import Image4 from "../../assets/Whispering4.webp";
import Image5 from "../../assets/Whispering5.webp";

const FoodTheWhispering = () => {
  return (
    <section>
      <FoodLocationDetails
        title="The Whispering"
        description="The menu at The Whispering is a carefully curated selection of contemporary cuisine, blending classic flavors with innovative twists. Each dish is crafted with the finest ingredients, emphasizing freshness and quality. From succulent steaks to delicate seafood, the offerings are designed to tantalize the taste buds and provide a memorable dining experience."
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        image5={Image5}
        week="8am-10pm"
        friday="8am-11pm"
        saturday="9am-11pm"
        sunday="12am-9pm"
      />
    </section>
  );
};
export default FoodTheWhispering;
