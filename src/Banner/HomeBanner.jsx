import React from "react";
import img1 from "../assets/sm-2.png";
import img2 from "../assets/sm-1.jpg";
import img3 from "../assets/sm-3.png";
import { Carousel } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <div className="mt-4" >
      <Carousel>
      <Carousel.Item interval={2000}>
      <div className="d-flex" style={{height:"500px"}}>
       <img
          className="d-block img-fluid w-50 h-100 "
          src={img1}
          alt="Second slide"
          
        />
        <div className="text-black w-50 p-5 d-flex justify-content-center align-items-center "> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus qui. Illo dicta obcaecati porro aperiam molestiae dignissimos officia ipsam.</p> </div>
       </div>
        {/* <Carousel.Caption className="text-black">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className="d-flex" style={{height:"500px"}}>
       <img
          className="d-block img-fluid w-50 h-100"
          src={img2}
          alt="Second slide"
          
        />
           <div className="text-black w-50 p-5 d-flex justify-content-center align-items-center "> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus qui. Illo dicta obcaecati porro aperiam molestiae dignissimos officia ipsam.</p> </div>
       </div>
        
        {/* <Carousel.Caption className="text-black">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className="d-flex" style={{height:"500px"}}>
       <img
          className="d-block img-fluid w-50 h-100"
          src={img3}
          alt="Second slide"
          
        />
           <div className="text-black w-50 p-5 d-flex justify-content-center align-items-center "> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus qui. Illo dicta obcaecati porro aperiam molestiae dignissimos officia ipsam.</p> </div>
       </div>
        {/* <Carousel.Caption className="text-black">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
      
    </div>
  );
};

export default HomeBanner;
