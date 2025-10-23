import React from "react";
import merchantImg from "../../assets/marchant.png";  

const Merchant = () => {
  return (
    <section className="bg-[#0f1b14] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto bg-[#16241d] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg">
        
        {/* Left Section */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            We help merchants deliver products fast and efficiently with full tracking and customer support.
            Your business growth is our responsibility.
          </p>

          <div className="flex gap-4">
          <button className="bg-[#CAEB66] hover:bg-[#B5D940] text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300 cursor-pointer">
  Become a Merchant
</button>

            <button className="border border-[#CAEB66] text-[#CAEB66] hover:bg-[#B5D940] hover:text-black font-semibold px-6 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={merchantImg}
            alt="Delivery Merchant"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Merchant;
