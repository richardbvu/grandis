import { Outlet } from "react-router-dom";
import Navbar from "../navbar/index";
import Footer from "../footer";

const PageLayout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};
export default PageLayout;
