import { Outlet } from "react-router-dom";
import Navbar from "../navbar/index";
import Footer from "../footer";

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
export default PageLayout;
