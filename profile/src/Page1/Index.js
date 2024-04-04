import React from "react";
import Ba1 from "../Asset/Bacground/bg2.png";
function Index() {
  return (
    <div className="flex my-10 mx-28">
      <div className="w-3/5">
        <h1 className="text-7xl font-bold">
          Empower Your Business with UpZero
        </h1>
      </div>
      <div className="w-2/5">
        <img className="animate-pulse " src={Ba1} alt="Gambar" />
      </div>
    </div>
  );
}

export default Index;
