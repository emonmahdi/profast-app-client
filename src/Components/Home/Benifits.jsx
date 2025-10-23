import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import benefitImg1 from "../../assets/benifits/benefits1.png";
import benefitImg2 from "../../assets/benifits/benefits2.png";
import benefitImg3 from "../../assets/benifits/benefits1.png";

const benefitsData = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: benefitImg1,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: benefitImg2,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: benefitImg3,
  },
];

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>

        <div className="space-y-6">
          {benefitsData.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="flex justify-center items-center w-[200px] h-[200px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
