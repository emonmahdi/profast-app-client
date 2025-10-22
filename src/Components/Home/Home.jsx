import React from 'react'
import Banner from "./Banner";
import Services from "./Service/Services";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <h2 className="text-3xl font-bold underline">Profast App</h2> */}
      <Banner />
      <Services />
    </div>
  );
};

export default Home