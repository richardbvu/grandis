import Grandis from "../../assets/GrandisLogo1.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav>
      {/* NAVBAR */}
      <div className="mx-auto flex max-w-[81%] items-center justify-between py-6">
        {/* LEFT SIDE  */}
        <div>
          <a href="/">
            <img className="h-[75px]" src={Grandis} alt="grandis-logo" />
          </a>
        </div>
        {/* RIGHT SIDE  */}
        {isAboveMediumScreens ? (
          <div className="flex items-center justify-center gap-8">
            {/* LINKS */}
            <div className="flex gap-7">
              <Link to={"food"}>
                <div className="hover:text-primary-100">Food</div>
              </Link>
              <Link to={"events"}>
                <div className="hover:text-primary-100">Events</div>
              </Link>
              <Link to={"art"}>
                <div className="hover:text-primary-100">Art</div>
              </Link>
              <Link to={"about"}>
                <div className="hover:text-primary-100">About</div>
              </Link>
              <Link to={"office"}>
                <div className="hover:text-primary-100">Office</div>
              </Link>
              <Link to={"news"}>
                <div className="hover:text-primary-100">News</div>
              </Link>
            </div>
            {/* ICONS */}
            <div className="flex gap-7">
              <a href="">
                <FaInstagram className="h-5 w-5 hover:text-primary-100" />
              </a>
              <a href="">
                <FaFacebookF className="h-5 w-5 hover:text-primary-100" />
              </a>
            </div>
            {/* CONTACT */}
            <Link to={"contact"}>
              <div className="rounded-lg border-[1px] border-black px-5 py-[5px] font-bold hover:border-primary-100 hover:bg-primary-100 hover:text-white">
                Contact
              </div>
            </Link>
          </div>
        ) : (
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <FaBars className="h-6 w-6" />
          </button>
        )}
        {/* MODAL MENU */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 z-50 h-full w-[300px] bg-primary-100">
            <div className="w-full px-10 py-10">
              <div className="flex justify-end">
                <FaXmark
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="h-6 w-6"
                />
              </div>
              <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-5">
                <Link to={"/"}>
                  <div className="hover:text-white">Home</div>
                </Link>
                <Link
                  to={"food"}
                  className="transition duration-300 hover:text-white"
                >
                  Food
                </Link>
                <Link
                  to={"events"}
                  className="transition duration-300 hover:text-white"
                >
                  Events
                </Link>
                <Link
                  to={"art"}
                  className="transition duration-300 hover:text-white"
                >
                  Art
                </Link>
                <Link
                  to={"about"}
                  className="transition duration-300 hover:text-white"
                >
                  About
                </Link>
                <Link
                  to={"news"}
                  className="transition duration-300 hover:text-white"
                >
                  News
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
