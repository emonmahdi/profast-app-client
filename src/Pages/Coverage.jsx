import { useLoaderData } from "react-router";
import BangladeshMap from "./BangladeshMap";

 

const Coverage = () => {
    const serviceCenters = useLoaderData();
    console.log(serviceCenters)
  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Our Coverage Area</h1>
        <p className="text-gray-500">We deliver all over Bangladesh</p>
      </div>

      <div className="shadow-lg bg-white rounded-lg overflow-hidden">
        <BangladeshMap serviceCenters={serviceCenters} />
      </div>
    </div>
  );
};

export default Coverage;
