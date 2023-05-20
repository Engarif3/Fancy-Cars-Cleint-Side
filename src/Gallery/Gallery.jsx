
import HomeBanner from '../Banner/HomeBanner';
import ShopByCategory from '../Section/ShopByCategory';
import Section2 from '../Section/Section2';
import img1 from "../assets/sm-2.png";
import img2 from "../assets/sm-1.jpg";
import img3 from "../assets/sm-3.png";
import img4 from "../assets/sm-4.png";
import img5 from "../assets/sm-5.png";
import img6 from "../assets/sm-6.png";
import Section1 from '../Section/Section1';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {

    useEffect(() => {
        AOS.init({
          // Configuration options
        });
      }, []);
    
    return (
        <div>
        <HomeBanner></HomeBanner>
        <div>
        <div className="container mt-4">
        <h3 className="display-1 text-center mb-4 ">
            <strong>
            Fancy Cars Gallery 
            </strong>
        </h3>
        <div className="row" >
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  shadow rounded mb-0 h-75 w-100"
                    data-aos="zoom-in" data-aos-duration="5000"
                    src={img1}
                    alt="..."
                />
                <h5 className='text-center'>Super Lorry</h5>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid shadow rounded  h-75 w-100"
                    data-aos="zoom-in" data-aos-duration="5000"
                    src={img2}
                    alt="..."
                />
                <h5 className='text-center'>Lamborghini Super</h5>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid shadow rounded  h-75 w-100"
                    data-aos="zoom-in" data-aos-duration="5000"
                    src={img3}
                    alt="..."
                />
                <h5 className='text-center'>Police Xtreme </h5>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid shadow rounded  h-75 w-100"
                    data-aos="zoom-in" data-aos-duration="5000"
                    src={img4}
                    alt="..."
                />
                <h5 className='text-center'>Mercedes Carbon</h5>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid shadow rounded  h-75 w-100"
                    data-aos="zoom-in" data-aos-duration="5000"
                    src={img5}
                    alt="..."
                />
                <h5 className='text-center'>Monster Truck</h5>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid shadow rounded  h-75 w-100"
                    data-aos="zoom-in" data-aos-duration="5000"
                    src={img6}
                    alt="..."
                />
                <h5 className='text-center'>Excavator</h5>
            </div>
        </div>
    </div>
       
        </div>
        <ShopByCategory></ShopByCategory>
        <Section1></Section1>
        <Section2></Section2>
        </div>
        
    );
};

export default Gallery;