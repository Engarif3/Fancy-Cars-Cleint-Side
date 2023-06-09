import React from "react";
import img1 from "../assets/sm-2.png";
import img2 from "../assets/sm-1.jpg";
import img3 from "../assets/sm-3.png";
import { Carousel } from "react-bootstrap";
import "./HomeBanner.css"; // Import the CSS file
import useTitle from "../Hooks/useTitle";

const HomeBanner = () => {
  useTitle("Home")
  return (
    <div className="my-5 banner-container" >
      <style>
        {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: invert(100%);
          }
        `}
      </style>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="d-flex" style={{ height: "500px" }}>
            <img
              className="d-block img-fluid w-50 h-100"
              src={img1}
              alt="Second slide"
            />
            <div className="bg-white w-50 p-5 d-flex justify-content-center align-items-center">
              <div className="fst-italic">
                <h1 className="text-primary edit">Accelerate the Fun with......</h1>
                <h2 className="ms-5 text-warning edit">
                  Fancy Cars that Bring Smiles to Kids!
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="d-flex" style={{ height: "500px" }}>
            <img
              className="d-block img-fluid w-50 h-100"
              src={img2}
              alt="Second slide"
            />
            <div className="bg-white w-50 p-5 d-flex justify-content-center align-items-center">
              <div className="fst-italic">
                <h1 className="text-primary edit">Fueling Excitement with ......</h1>
                <h2 className="ms-5 text-warning edit">
                  Toy Cars for Kids to have Big Adventures!
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="d-flex" style={{ height: "500px" }}>
            <img
              className="d-block img-fluid w-50 h-100"
              src={img3}
              alt="Second slide"
            />
            <div className="bg-white w-50 p-5 d-flex justify-content-center align-items-center">
              <div className="fst-italic">
                <h1 className="text-primary edit">Unleash the Joyride......</h1>
                <h2 className="ms-5 text-warning edit">
                  Discover Endless Fun with Fancy Cars!
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
