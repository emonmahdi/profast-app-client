import React from 'react'
import Banner from "./Banner";
import Services from "./Service/Services";
import ClientLogoSlider from "./ClientLogoSlider";
import Benefits from "./Benifits";
import Merchant from "./Merchant";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="">
      {/* <h2 className="text-3xl font-bold underline">Profast App</h2> */}
      <Banner />
      <HowItWorks />
      <Services />
      <ClientLogoSlider />
      <Benefits />
      <Merchant />
    </div>
  );
};

export default Home