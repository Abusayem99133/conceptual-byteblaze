import { Outlet } from "react-router-dom";
import Navbars from "../Components/Navbars/Navbars";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">
        <Navbars></Navbars>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
