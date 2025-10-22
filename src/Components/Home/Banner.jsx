import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Banner = () => {
  return (
    <div className="my-3 bg-blue-">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={banner1} alt="Banner 1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
