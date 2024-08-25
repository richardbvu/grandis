import { Link } from "react-router-dom";
import GrandisLogo from "../../assets/GrandisLogo.png";
import GrandisLogo1 from "../../assets/GrandisLogo1.png";

const Footer = () => {
  return (
    <footer className="mx-auto mt-[150px] w-full">
      <div className="flex flex-row justify-evenly gap-[100px] bg-primary-100 py-10">
        {/* LEFT SIDE */}
        <div className="">
          <img src={GrandisLogo1} alt="grandis-logo" className="h-[75px]" />
          {/* <p>The Grandis</p> */}
          <div className="my-5">
            <p>912 W 111th St Torrance </p>
            <p>Torrance, CA 90502</p>
            <p>(555) 123-4512</p>
          </div>
          <div>
            <p>©2024 The Grandis. All rights reserved.</p>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <div className="flex flex-col gap-10">
            <p>Pages</p>
            <Link
              to={"food"}
              className="text-white underline underline-offset-4"
            >
              Food
            </Link>
            <Link to={"food"}>Food</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
