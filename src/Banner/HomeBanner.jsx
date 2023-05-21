import React from "react";
import img1 from "../assets/sm-2.png";
import img2 from "../assets/sm-1.jpg";
import img3 from "../assets/sm-3.png";
import { Carousel } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <div className="my-5">
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="d-flex" style={{ height: "500px" }}>
            <img
              className="d-block img-fluid w-50 h-100 "
              src={img1}
              alt="Second slide"
            />
            <div className="bg-white w-50 p-5 d-flex justify-content-center align-items-center ">
              <div className="fst-italic">
                <h1 className="text-primary">Accelerate the Fun with......</h1>
                <h2 className="ms-5 text-warning">
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
             <div className="bg-white w-50 p-5 d-flex justify-content-center align-items-center ">
              <div className="fst-italic">
                <h1 className="text-primary">Fueling Excitement with ......</h1>
                <h2 className="ms-5 text-warning">
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
            <div className="bg-white w-50 p-5 d-flex justify-content-center align-items-center ">
              <div className="fst-italic">
                <h1 className="text-primary">Unleash the Joyride......</h1>
                <h2 className="ms-5 text-warning">
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
