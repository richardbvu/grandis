import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Bistro1.webp";
import Image2 from "../../assets/Bistro2.webp";
import Image3 from "../../assets/Bistro3.webp";
import Image4 from "../../assets/Bistro4.webp";

const FoodBistro = () => {
  return (
    <section>
      <FoodLocationDetails
        title="Bistro Blue Horizon"
        description="A charming and contemporary restaurant nestled along the waterfront, offering an exquisite dining experience that combines the finest flavors of the sea with a modern culinary twist. With its elegant nautical-themed decor, featuring deep blue hues, polished wood accents, and panoramic windows showcasing stunning ocean views, Bistro Blue Horizon provides the perfect backdrop for any occasion."
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        week="11am-10pm"
        friday="11am-10pm"
        saturday="11am-11pm"
        sunday="11am-8pm"
      />
    </section>
  );
};
export default FoodBistro;
