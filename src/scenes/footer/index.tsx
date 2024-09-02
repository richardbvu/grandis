import { Link } from "react-router-dom";
import GrandisLogo from "../../assets/GrandisLogo.png";

const Footer = () => {
  return (
    <footer className="mx-auto mt-[150px] w-full">
      <div className="flex justify-evenly gap-[40px] bg-primary-100 py-10 xs:flex-col xs:items-center xs:text-center sm:flex-col md:flex-row md:text-start lg:flex-row lg:text-start">
        {/* LEFT SIDE */}
        <div>
          <Link to={"/"}>
            <img
              src={GrandisLogo}
              alt="grandis-logo"
              className="h-[75px] xs:mx-auto sm:mx-auto md:mx-0 lg:mx-0"
            />
          </Link>

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
              to={"/"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              to={"food"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              Food
            </Link>
            <Link
              to={"events"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              Events
            </Link>
            <Link
              to={"art"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              Art
            </Link>
            <Link
              to={"about"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              About
            </Link>
            <Link
              to={"office"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              Office
            </Link>
            <Link
              to={"contact"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              Contact
            </Link>
            {/* <Link
              to={"news"}
              className="underline underline-offset-4 transition duration-300 hover:text-white"
            >
              News
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
