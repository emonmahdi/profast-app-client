import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import logo1 from "../../assets/client-logo/logo1.png";
import logo2 from "../../assets/client-logo/logo2.png";
import logo3 from "../../assets/client-logo/logo3.png";
import logo4 from "../../assets/client-logo/logo4.png";
import logo5 from "../../assets/client-logo/logo5.png";
import logo6 from "../../assets/client-logo/logo6.png";

const ClientLogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <>
    
    <div className="w-full py-6 bg-white overflow-hidden">
        
    <h3 className="text-center text-3xl font-bold mb-12">We've helped thousands of sales teams</h3>
      <Swiper
        slidesPerView={6}
        spaceBetween={100}
        loop={true}
        freeMode={true}
        speed={5000} 
        loopAdditionalSlides={10} // 👈 Prevents jump
        autoplay={{
          delay: 0, // 👈 No delay (always moving)
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // 👈 No dragging, pure auto
        modules={[Autoplay, FreeMode]}
        className="items-center"
      >
        {logos.concat(logos).map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Client Logo ${index}`}
              className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default ClientLogoSlider;
