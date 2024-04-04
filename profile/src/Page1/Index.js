import React from "react";
import Ba1 from "../Asset/Bacground/bg2.png";
import Services from "./Services";

function Index() {
  return (
    <div className="flex my-14 mx-28">
      <div className="w-3/5">
        <h1 className="text-5xl font-bold">
          Empower Your Business with UpZero
        </h1>
      </div>
      <div></div>
      <div className="w-2/5">
        <img className="animate-spin  duration-300" src={Ba1} alt="Gambar" />
      </div>
    </div>
  );
}

export default Index;
