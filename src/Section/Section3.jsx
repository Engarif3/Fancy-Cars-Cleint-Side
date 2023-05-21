import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpg";
import img4 from "../assets/c4.jpg";
import img5 from "../assets/c5.jpg";
import img6 from "../assets/c6.jpg";
import img7 from "../assets/c7.jpg";
import { Container } from "react-bootstrap";

const Section3 = () => {
  return (
    <Container className="mt-5">
        <h3 className="display-1 text-center mb-4 ">
        <strong>Kids of the Month</strong>
      </h3>
      <Marquee pauseOnHover={true} className="mt-5 fst-italic text-danger">
        <div className="d-flex justify-content-evenly align-items-center gap-4">
           <div style={{height:"20rem",width:"32rem"}}> <img className="img-fluid w-100 h-100 rounded-2 ms-4" src={img1} alt="" /> </div>
           
           <div style={{height:"20rem",width:"32rem"}}> <img className="img-fluid w-100 h-100 rounded-2" src={img2} alt="" /> </div>
           <div style={{height:"20rem",width:"32rem"}}> <img className="img-fluid w-100 h-100 rounded-2" src={img3} alt="" /> </div>
           <div style={{height:"20rem",width:"32rem"}}> <img className="img-fluid w-100 h-100 rounded-2" src={img4} alt="" /> </div>
           <div style={{height:"20rem",width:"32rem"}}> <img className="img-fluid w-100 h-100 rounded-2" src={img5} alt="" /> </div>
           <div style={{height:"20rem",width:"32rem"}}> <img className="img-fluid w-100 h-100 rounded-2" src={img6} alt="" /> </div>
           <div style={{height:"20rem",width:"32rem"}}> <img className="img-fluid w-100 h-100 rounded-2" src={img7} alt="" /> </div>

        </div>
        
      </Marquee>
    </Container>
  );
};

export default Section3;
