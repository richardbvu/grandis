import { Link } from "react-router-dom";

const ContactSectionTwo = () => {
  return (
    <div>
      <div>
        <div className="z-0 mx-auto bg-gray-200 bg-office_pattern py-[50px] text-center underline underline-offset-4">
          <Link
            to={"/food"}
            className="z-10 mx-auto w-[50%] italic text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Check out the Restaurants!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactSectionTwo;
