import ContactImage1 from "../../assets/ContactImage1.jpg";

const Contact = () => {
  return (
    <section className="w-full py-[100px]">
      <div className="mx-auto flex w-[80%] items-center justify-start gap-[100px] xs:flex-col sm:flex-col md:flex-row">
        {/* IMAGE */}
        <div className="h-[500px] sm:order-2 md:order-1">
          <img
            src={ContactImage1}
            alt="Grandis-image"
            className="aspect-auto max-h-[500px] rounded"
          />
        </div>
        {/* CONTACT INFORMATION */}
        <div className="sm:order-1">
          <div className="flex flex-col gap-5">
            <p className="text-4xl">CONTACT US</p>
            <a href="tel:5551234512" className="text-lg">
              (555) 123-4512
            </a>
            <div className="text-lg">
              <p>912 W 111th St Torrance</p>
              <p>Torrance, CA 90502</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
