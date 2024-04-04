import React from "react";
import Ba1 from "../Asset/Bacground/bg2.png";

function Index() {
  return (
    <div className="flex my-14 mx-28 space-x-4">
      <div className=" flex w-3/5 mt-16">
        <div></div>
        <h1 className="text-6xl font-bold">Empower Your Business with</h1>
        <h1 className="text-7xl font-bold text-blue-400">UpZero</h1>
      </div>
      <div></div>
      <div className="w-2/5">
        <img className="animate-pulse" src={Ba1} alt="Gambar" />
      </div>
    </div>
  );
}

export default Index;
