import AboutSectionOne from "./aboutSectionOne";
import AboutSectionTwo from "./aboutSectionTwo";
import AboutSectionThree from "./aboutSectionThree";

const About = () => {
  return (
    <section className="flex flex-col gap-[300px]">
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </section>
  );
};
export default About;
