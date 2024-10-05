import Office2 from "../../assets/Office2.webp";
import Office3 from "../../assets/Office3.webp";
import Office4 from "../../assets/Office4.webp";
import Office5 from "../../assets/Office5.webp";
import Office6 from "../../assets/Office6.webp";
import Office7 from "../../assets/Office7.webp";
import Office8 from "../../assets/Office8.webp";
import Office9 from "../../assets/Office9.webp";
import OfficeImages from "./officeImages";

const offices = [
  {
    image: Office2,
    id: 1,
  },
  {
    image: Office3,
    id: 2,
  },
  {
    image: Office4,
    id: 3,
  },
  {
    image: Office5,
    id: 4,
  },
  {
    image: Office6,
    id: 5,
  },
  {
    image: Office7,
    id: 6,
  },
  {
    image: Office8,
    id: 7,
  },
  {
    image: Office9,
    id: 8,
  },
];

const OfficeImageSection = () => {
  return (
    <section className="flex w-full">
      <div className="xs:grid-col-2 mx-auto grid gap-10 xs:px-[50px] sm:grid-cols-2 sm:px-[150px] md:grid-cols-2 md:px-[200px] lg:grid-cols-3">
        {offices.map((office) => (
          <OfficeImages key={office.id} image={office.image} />
        ))}
      </div>
    </section>
  );
};
export default OfficeImageSection;
