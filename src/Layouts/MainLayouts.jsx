import { Outlet } from "react-router-dom";
import Navbars from "../Components/Navbars/Navbars";

import Footer from "../Components/Navbars/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">
        <Navbars></Navbars>
      </div>
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
