import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SellerS from "./SellerS";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SellerS/>
    </>
  );
};

export default Layout;
