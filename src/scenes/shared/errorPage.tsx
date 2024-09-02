import { Link } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="mx-auto w-[50%] py-[200px] text-center text-2xl">
          <p className="mb-10">Sorry about that. This page is unavailable.</p>
          <Link to={"/"} className="italic underline underline-offset-4">
            Home Page
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ErrorPage;
