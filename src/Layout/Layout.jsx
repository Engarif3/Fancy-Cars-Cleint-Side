import React from "react";
import Navigationbar from "../shared/Navbar/Navigationbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";


const Layout = () => {
 
  const style = {
    backgroundColor: "#142c64",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
  };
  
  const footerContainer = {
    marginTop: "auto",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navigationbar />
      <Outlet />
      <div style={footerContainer}>
        <div style={style} className=" text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;


