import Grandis from "../../assets/GrandisLogo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
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
          <Link to={"/"}>
            <img className="h-[75px]" src={Grandis} alt="grandis-logo" />
          </Link>
        </div>
        {/* RIGHT SIDE  */}
        {isAboveMediumScreens ? (
          <div className="flex items-center justify-center gap-14">
            {/* LINKS */}
            <div className="flex gap-7">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                <div className="hover:text-primary-100">Home</div>
              </NavLink>
              <NavLink
                to={"food"}
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                <div className="hover:text-primary-100">Food</div>
              </NavLink>
              <NavLink
                to={"events"}
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                <div className="hover:text-primary-100">Events</div>
              </NavLink>
              <NavLink
                to={"art"}
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                <div className="hover:text-primary-100">Art</div>
              </NavLink>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                <div className="hover:text-primary-100">About</div>
              </NavLink>
              <NavLink
                to={"office"}
                className={({ isActive }) =>
                  isActive ? "text-primary-100" : ""
                }
              >
                <div className="hover:text-primary-100">Office</div>
              </NavLink>
            </div>
            {/* ICONS */}
            {/* <div className="flex gap-7">
              <a href="">
                <FaInstagram className="h-5 w-5 hover:text-primary-100" />
              </a>
              <a href="">
                <FaFacebookF className="h-5 w-5 hover:text-primary-100" />
              </a>
            </div> */}
            {/* CONTACT */}
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg border-[1px] border-primary-100 bg-primary-100 px-5 py-[5px] font-bold text-white"
                  : "rounded-lg border-[1px] border-black px-5 py-[5px] font-bold hover:border-primary-100 hover:bg-primary-100 hover:text-white"
              }
            >
              <div className="">Contact</div>
            </NavLink>
          </div>
        ) : (
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <FaBars className="h-6 w-6 transition duration-300 hover:text-primary-100" />
          </button>
        )}
        {/* MODAL MENU */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 z-50 h-full w-[300px] bg-primary-100">
            <div className="w-full px-[50px] py-[50px]">
              <div className="flex justify-end">
                <FaXmark
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="h-6 w-6 transition duration-300 hover:cursor-pointer hover:text-white"
                />
              </div>
              <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-8">
                <NavLink
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  <div className="hover:text-white">Home</div>
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  to={"food"}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  Food
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  to={"events"}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  Events
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  to={"art"}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  Art
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  to={"about"}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  to={"office"}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  Office
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  to={"contact"}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
