import OfficeImageSection from "./officeImageSection";
import OfficeSectionOne from "./officeSectionOne";
import OfficeSectionTwo from "./officeSectionTwo";
import OfficeSectionThree from "./officeSectionThree";

const Office = () => {
  return (
    <section className="flex flex-col gap-[150px]">
      <OfficeSectionOne />
      <OfficeSectionTwo />
      <OfficeSectionThree />
      <OfficeImageSection />
    </section>
  );
};
export default Office;
