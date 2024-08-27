import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../navbar/index";
import Footer from "../footer";

const PageLayout = () => {
  return (
    <section>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};
export default PageLayout;
