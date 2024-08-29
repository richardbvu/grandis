import OfficeImageSection from "./officeImageSection";
import OfficeSectionOne from "./officeSectionOne";

const Office = () => {
  return (
    <section className="flex flex-col gap-[150]">
      <OfficeSectionOne />
      <OfficeImageSection />
    </section>
  );
};
export default Office;
