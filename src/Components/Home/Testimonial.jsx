// src/components/Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Testimonial Data
const testimonials = [
  { id: 1, name: "Sadia Rahman", role: "E-commerce Owner", rating: 5, message: "Profast sped up our deliveries massively. The tracking and support are exceptional — highly recommended!", avatarSeed: "sadia-rahman" },
  { id: 2, name: "Arif Khan", role: "Restaurant Owner", rating: 5, message: "Easy onboarding for merchants and fast payouts. Customers love the real-time delivery updates.", avatarSeed: "arif-khan" },
  { id: 3, name: "Runa Akter", role: "Retailer", rating: 5, message: "Great service and reliable riders. The merchant dashboard saves me hours each week.", avatarSeed: "runa-akter" },
  { id: 4, name: "Saif Ullah", role: "Marketplace Seller", rating: 5, message: "Smooth integration and prompt support. The highlighted delivery ETA feature is brilliant.", avatarSeed: "saif-ullah" },
  { id: 5, name: "Tania Noor", role: "Boutique Owner", rating: 5, message: "Stylish app and dependable deliveries — our customer satisfaction improved a lot after using Profast.", avatarSeed: "tania-noor" },
];

const StarRating = ({ value = 5 }) => (
  <div className="flex gap-1 mt-3">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < value ? "text-[#CAEB66]" : "text-gray-500"}>★</span>
    ))}
  </div>
);

const Testimonial = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0a1510] to-[#0f1b14] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Trusted by businesses nationwide — real feedback from our happy
          partners.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.1}
        spaceBetween={20}
        className="testimonial-swiper"
        pagination={{ el: ".testimonial-pagination", clickable: true }}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        breakpoints={{
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide
            key={t.id}
            className="transition-all duration-500 ease-in-out"
          >
            <div className="testimonial-card p-6 rounded-2xl bg-[#18221c] border border-transparent shadow-lg transition">
              <div className="flex items-center gap-4">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.avatarSeed}`}
                  className="w-14 h-14 rounded-full border border-[#CAEB66]"
                  alt={t.name}
                />
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              <StarRating value={t.rating} />
              <p className="text-gray-300 mt-4 italic">“{t.message}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button className="testimonial-prev text-white bg-transparent border border-gray-600 w-10 h-10 rounded-full hover:border-[#CAEB66] transition flex items-center justify-center">
          ←
        </button>
        <button className="testimonial-next text-white bg-transparent border border-gray-600 w-10 h-10 rounded-full hover:border-[#CAEB66] transition flex items-center justify-center">
          →
        </button>
      </div>

      {/* Pagination */}
      <div className="testimonial-pagination flex justify-center mt-4"></div>

      {/* Highlight Active Card Effect */}
      <style>{`
  .testimonial-swiper .swiper-slide {
    opacity: 0.4;
    transform: scale(0.6);
    transition: all 0.5s ease;
  }
  .testimonial-swiper .swiper-slide-active {
    opacity: 1 !important;
    transform: scale(1.0) !important;
  }
  .testimonial-swiper .testimonial-card {
    border: 1px solid transparent;
    transition: all 0.5s ease;
  }
  .testimonial-swiper .swiper-slide-active .testimonial-card {
    border-color: #CAEB66;
    box-shadow: 0px 0px 30px rgba(202, 235, 102, 0.3);
  }
`}</style>
    </section>
  );
};

export default Testimonial;
