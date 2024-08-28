import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Pho1.jpg";
import Image2 from "../../assets/Pho2.jpg";
import Image4 from "../../assets/Pho4.jpg";
import Image5 from "../../assets/Pho5.jpg";

const FoodPho = () => {
  return (
    <section>
      <FoodLocationDetails
        title="Velvet Pho"
        description="an elegant Vietnamese restaurant that offers a modern twist on traditional pho. Nestled in a chic, cozy setting, Velvet Pho invites you to experience the rich, aromatic flavors of Vietnam. Our menu features a variety of pho bowls made from slow-cooked broths, fresh herbs, and premium cuts of meat, along with vegetarian and vegan options to cater to all dietary preferences."
        image1={Image1}
        image2={Image2}
        image3={Image4}
        image5={Image5}
        week="11am-11pm"
        friday="11am-11pm"
        saturday="11am-11pm"
        sunday="11am-8pm"
      />
    </section>
  );
};
export default FoodPho;
