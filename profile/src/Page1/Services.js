import React from "react";
import Pg2 from "../Asset/AssetPorto/gambar Machine learning app.jpg";
import Pg1 from "../Asset/AssetPorto/gambar web app.png";
function Services() {
  return (
    <div className="justify-center">
      <div className="flex flex-wrap justify-center relative border-dotted border-2 border-indigo-600 h-48">
        <div className="flex justify-center pt-5 pb-16 relative">
          <h1 className="text-6xl text-slate-500 font-bold pr-5">Our</h1>
          <h1 className="text-6xl font-bold">Product</h1>
        </div>
        <div className="w-60 relative">
          <img
            src={Pg1}
            alt="gambar"
            className="w-60 align-middle absolute bottom-2 left-2"
          />
          <p className="absolute bottom-2.5 left-3 text-stone-50">Web App</p>
        </div>
        <div className="w-60 relative">
          <img
            src={Pg2}
            alt="gambar"
            className="w-60 align-middle absolute bottom-2 left-2"
          />
          <p className="absolute bottom-2.5 left-3 text-stone-50">
            Machine Learning
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
