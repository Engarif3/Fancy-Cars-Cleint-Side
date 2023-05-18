import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaMobile } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="d-flex gap-4 align-items-center justify-content-between" >
       <h6 className="fst-italic text-start mb-4">&copy; 2023 Chef-De-Home Inc. All rights reserved.</h6>
      <div className=" d-flex gap-4 align-items-center justify-content-center mb-4"style={{ fontSize: "20px" }}>
        <FaFacebook></FaFacebook><FaInstagram></FaInstagram><FaTwitter></FaTwitter>
      </div>
        <div className="text-start"><FaMobile  className="text-danger"></FaMobile> <span className="fst-italic">+33-15203555728</span><p className="fst-italic">Address: 51, Gare DU Nord, Paris</p></div>
        
    </Container>
  );
};

export default Footer;
