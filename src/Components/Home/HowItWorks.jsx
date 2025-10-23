// src/components/HowItWorks.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// src/data/howItWorksData.js
import { FaTruck, FaBoxOpen, FaCheckCircle, FaSmile } from "react-icons/fa";

const howItWorksData = [
  {
    id: 1,
    icon: <FaTruck size={40} className="text-lime-500" />,
    title: "Fast Delivery",
    description:
      "Get your products delivered to your doorstep quickly and safely.",
  },
  {
    id: 2,
    icon: <FaBoxOpen size={40} className="text-lime-500" />,
    title: "Order Packed Securely",
    description:
      "All items are packed carefully to avoid any damage during transit.",
  },
  {
    id: 3,
    icon: <FaCheckCircle size={40} className="text-lime-500" />,
    title: "Real-Time Tracking",
    description: "Track your order in real-time from dispatch to delivery.",
  },
  {
    id: 4,
    icon: <FaSmile size={40} className="text-lime-500" />,
    title: "Customer Satisfaction",
    description: "Our priority is a happy customer with timely delivery.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-[#16241d] mb-2">
          How It Works
        </h2>
        <p className="text-[#16241d] text-lg md:text-xl">
          Experience seamless delivery with our easy 4-step process.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {howItWorksData.map((card) => (
          <div
            key={card.id}
            data-aos="fade-up"
            className="bg-white p-6 rounded-3xl flex flex-col items-start hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-base md:text-xl font-semibold text-[#03373D] mb-2">
              {card.title}
            </h3>
            <p className="text-[#606060] text-sm md:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
