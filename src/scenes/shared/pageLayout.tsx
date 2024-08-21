import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      PageLayout
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default PageLayout;
