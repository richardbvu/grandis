import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Olive1.webp";
import Image2 from "../../assets/Olive2.webp";
import Image3 from "../../assets/Olive3.webp";
import Image4 from "../../assets/Olive4.webp";

const FoodOliveAndJuni = () => {
  return (
    <section>
      <FoodLocationDetails
        title="Olive & Juni"
        description="We pride ourselves on crafting dishes that are both visually stunning and tantalizing to the palate. Our menu features a curated selection of Mediterranean-inspired dishes, from fresh, vibrant salads and artisanal flatbreads to succulent grilled meats and seafood. Each dish is prepared with the finest ingredients, infused with aromatic herbs, and drizzled with the finest olive oils."
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        week="9am-10pm"
        friday="9am-10pm"
        saturday="9am-11pm"
        sunday="12am-9pm"
      />
    </section>
  );
};
export default FoodOliveAndJuni;
