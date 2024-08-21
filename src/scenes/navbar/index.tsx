import Grandis from "../../assets/grandis.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-10 py-5">
        {/* LEFT SIDE  */}
        <div>
          <a href="/" className="">
            <img
              className="h-[80px] w-[250px]"
              src={Grandis}
              alt="grandis-logo"
            />
          </a>
        </div>
        {/* RIGHT SIDE  */}
        <div>
          <Link to={"food"}>Food</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
