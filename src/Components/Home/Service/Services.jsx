import { 
    FaShippingFast, 
    FaGlobeAsia, 
    FaWarehouse, 
    FaMoneyCheckAlt, 
    FaBuilding, 
    FaUndo 
  } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
  
  const services = [
    {
      icon: <FaShippingFast size={40} />,
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
    },
    {
      icon: <FaGlobeAsia size={40} />,
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
    },
    {
      icon: <FaWarehouse size={40} />,
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
    },
    {
      icon: <FaMoneyCheckAlt size={40} />,
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which include warehouse and inventory management support."
    },
    {
      icon: <FaUndo size={40} />,
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
    }
  ];
  
  export default function Services() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Reliable, fast and affordable logistics solutions across Bangladesh.
          </p>
  
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard service={service} key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  