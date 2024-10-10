const AboutSectionThree = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col gap-10">
          <div className="relative mx-auto flex basis-6/12 items-center justify-center xs:text-center xs:text-2xl sm:text-start sm:text-3xl md:text-start md:text-4xl lg:text-start lg:text-5xl">
            About the Developer
          </div>
          <p className="relative mx-auto flex items-center justify-center xs:text-center xs:text-base sm:text-start sm:text-base md:text-start md:text-lg lg:text-start lg:text-2xl">
            Richard Vu is a passionate Front-end Developer based in Torrance,
            California.
          </p>
          <a
            href="https://github.com/richardbvu"
            target="_blank"
            className="mx-auto w-fit rounded-lg bg-gray-300 px-7 py-4 transition duration-300 hover:bg-gray-200 hover:text-white"
          >
            <button>Visit GitHub</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionThree;
