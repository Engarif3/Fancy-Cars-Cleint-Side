import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section1 = () => {
    useEffect(() => {
        AOS.init({
          // Configuration options
        });
      }, []);
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000">
  This element will fade in from the bottom.
</div>
        </div>
    );
};

export default Section1;