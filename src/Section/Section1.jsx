import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import img1 from "../assets/s1.jpg";
import img3 from "../assets/s3.jpg";
import img4 from "../assets/s4.jpg";
import Marquee from "react-fast-marquee";

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      // Configuration options
    });
  }, []);

  return (
    <div className="my-5">
      <h3 className="display-1 text-center mb-4 ">
        <strong>New Arrivals</strong>
      </h3>

      <Container className="d-md-flex d-lg-flex justify-content-center align-items-center gap-1">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="m-auto border border-2 rounded-4 border-text-danger "
          style={{
            width: "25rem",
            height: "25rem",
            position: "relative",
            backgroundColor: "#142c64",
          }}
        >
          <img
            className="img-fluid "
            src={img1}
            alt=""
            style={{ borderRadius: "15px 15px" }}
          />
          <h3 className="text-center">Police Xtreme</h3>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="m-auto border border-2 rounded-4 border-text-danger "
          style={{
            width: "25rem",
            height: "25rem",
            position: "relative",
            backgroundColor: "#142c64",
          }}
        >
          <img
            className="img-fluid w-100 h-100 mx-auto "
            src={img4}
            alt=""
            style={{ borderRadius: "15px 15px" }}
          />
          <h3 className="text-center">Caprio E-tron</h3>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="m-auto border border-2 rounded-4 border-text-danger "
          style={{
            width: "25rem",
            height: "25rem",
            position: "relative",
            backgroundColor: "#142c64",
          }}
        >
          <img
            className="img-fluid w-100 h-100 mx-auto "
            src={img3}
            alt=""
            style={{ borderRadius: "15px 15px" }}
          />
          <h3 className="text-center">Mini Monster</h3>
        </div>
      </Container>
      <div>
        <Marquee className="mt-5 fst-italic text-danger">
          <h2>For more details contact with us for exciting deals and offers. email: fancy-cars@gmail.com.</h2>
        </Marquee>
      </div>
    </div>
  );
};

export default Section1;
