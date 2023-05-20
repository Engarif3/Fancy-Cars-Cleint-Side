import React from "react";
import Navigationbar from "../shared/Navbar/Navigationbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
  };
  
  const footerContainer = {
    marginTop: "auto",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navigationbar />
      <Outlet />
      <div style={footerContainer}>
        <div style={style} className="bg-black text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;


