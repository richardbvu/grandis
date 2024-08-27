import FoodLocationDetails from "./foodLocationDetails";
import Image1 from "../../assets/Salad1.jpg";
import Image2 from "../../assets/Salad2.jpg";
import Image3 from "../../assets/Salad3.jpg";
import Image4 from "../../assets/Salad4.jpg";
import Image5 from "../../assets/Salad5.jpg";

const FoodSallys = () => {
  return (
    <section>
      <FoodLocationDetails
        title="Sally's Super Salad"
        description="Welcome to Sally's Super Salad, where freshness meets flavor in every bite! At Sally's, we're passionate about creating delicious, nutritious salads that are as vibrant as they are satisfying. Our menu is bursting with a diverse selection of greens, grains, and proteins, offering endless combinations to suit every taste and dietary preference."
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        image5={Image5}
        week="11am-9pm"
        friday="11am-10pm"
        saturday="11am-10pm"
        sunday="11am-9pm"
      />
    </section>
  );
};
export default FoodSallys;
