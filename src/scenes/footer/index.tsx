import { Link } from "react-router-dom";
import GrandisLogo from "../../assets/GrandisLogo.png";

const Footer = () => {
  return (
    <footer className="mx-auto mt-[150px] w-full">
      <div className="flex justify-evenly gap-[40px] bg-primary-100 py-10 xs:flex-col xs:items-center xs:text-center sm:flex-col md:flex-row md:text-start lg:flex-row lg:text-start">
        {/* LEFT SIDE */}
        <div className="">
          <img
            src={GrandisLogo}
            alt="grandis-logo"
            className="h-[75px] xs:mx-auto sm:mx-auto md:mx-0 lg:mx-0"
          />
          {/* <p>The Grandis</p> */}
          <div className="my-5">
            <p>912 W 111th St Torrance </p>
            <p>Torrance, CA 90502</p>
            <a href="tel:5551234512">(555) 123-4512</a>
          </div>
          <div>
            <p>©2024 The Grandis. All rights reserved.</p>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold">Pages</p>
            <Link
              to={"food"}
              className="text-white underline underline-offset-4 transition duration-300 hover:text-black"
            >
              Food
            </Link>
            <Link
              to={"events"}
              className="text-white underline underline-offset-4 transition duration-300 hover:text-black"
            >
              Events
            </Link>
            <Link
              to={"art"}
              className="text-white underline underline-offset-4 transition duration-300 hover:text-black"
            >
              Art
            </Link>
            <Link
              to={"about"}
              className="text-white underline underline-offset-4 transition duration-300 hover:text-black"
            >
              About
            </Link>
            <Link
              to={"news"}
              className="text-white underline underline-offset-4 transition duration-300 hover:text-black"
            >
              News
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
