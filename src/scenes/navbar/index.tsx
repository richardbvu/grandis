import Grandis from "../../assets/grandis.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {/* NAVBAR */}
      <div className="mx-auto flex w-11/12 items-center justify-between py-6">
        {/* LEFT SIDE  */}
        <div>
          <a href="/">
            <img
              className="h-[50px] w-[180px]"
              src={Grandis}
              alt="grandis-logo"
            />
          </a>
        </div>
        {/* RIGHT SIDE  */}
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
              <FaInstagram className="hover:text-primary-100 h-5 w-5" />
            </a>
            <a href="">
              <FaFacebookF className="hover:text-primary-100 h-5 w-5" />
            </a>
          </div>
          {/* CONTACT */}
          <Link to={"contact"}>
            <div className="hover:bg-primary-100 hover:border-primary-100 rounded-lg border-[1px] border-black px-5 py-[5px] font-bold hover:text-white">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
