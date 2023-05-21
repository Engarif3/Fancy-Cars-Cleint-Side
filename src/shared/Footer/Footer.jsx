import React from "react";
// import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaMobile } from "react-icons/fa";
import logo1 from "../../assets/car-logo1.png";

const Footer = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between ">
        <div className="d-flex justify-content-center align-items-center gap-2">
        <div className="mb-4">
          <img style={{ width: "80px" }} src={logo1} alt="" />
          <h5 className="ms-5 text-danger fw-bold fst-italic mb-2">
            &nbsp; Fancy-Cars
          </h5>
        </div>
        <h6 className="fst-italic mt-4">
          &copy; 2023 Fancy-Cars Inc. All rights reserved.
        </h6>
        </div>
        
        <div
          className=" d-flex gap-4 align-items-center justify-content-center mb-4"
          style={{ fontSize: "25px" }}
        >
          <a href="https://www.facebook.com/">
            <FaFacebook className="mr-2" />
          </a>

          <a href="https://www.instagram.com/">
            <FaInstagram className="mr-2" />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter className="mr-2" />
          </a>
        </div>
        <div className="text-start">
          <FaMobile className="text-white"></FaMobile>{" "}
          <span className="fst-italic">+49-15203555728</span>
          <p className="fst-italic">Address: Reichenhainer str.51 <br /> 09126, Chemnitz <br /> Germany</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
