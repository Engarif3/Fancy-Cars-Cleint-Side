import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";


const Section1 = () => {
  useEffect(() => {
    AOS.init({
      // Configuration options
    });
  }, []);

  return (
    <div className="my-5">
      <h3 className="display-1 text-center mb-4 ">
            <strong>
            New Arrivals
            </strong>
        </h3>
      
      <Container className="d-flex justify-content-center align-items-center gap-1">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
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
            src="https://images-na.ssl-images-amazon.com/images/I/51SEsclwHqL.jpg"
            alt=""
            style={{ borderRadius: "15px 15px" }}
          />
          <h3 className="text-center">Police Xtreme</h3>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
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
            src="https://4.imimg.com/data4/SP/DC/ANDROID-3155844/product-1000x1000.jpeg"
            alt=""
            style={{ borderRadius: "15px 15px" }}
          />
          <h3 className="text-center">Caprio E-tron</h3>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
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
            src="https://rukminim1.flixcart.com/image/832/832/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70"
            alt=""
            style={{ borderRadius: "15px 15px" }}
          />
          <h3 className="text-center">Mini Monster</h3>
        </div>
      </Container>
    </div>
  );
};

export default Section1;
