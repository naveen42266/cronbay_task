import React from "react";
import Header from "../../components/header";
import FreeLancerCard from "../../components/freelancer";
import { FreeLancerData } from "../../data";

const Home = () => {
  return (
    <div className="w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 min-h-screen max-h-full w-full">
        <Header />
        <h1 className="font-bold text-3xl text-gray-800 text-center my-6">
          🚀 Hire the Best Freelancers
        </h1>
        <div className="grid grid-cols-4">
          {FreeLancerData?.map((ele, index) => {
            return (
              <div key={index} className="col-span-1 py-4">
                <FreeLancerCard person={ele} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;