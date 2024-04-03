import React from "react";
import Lg from "../Asset/Bacground/UpZero(2).png";

function Header() {
  return (
    <div>
      <div className="flex ">
        <div className="w-36">
          <img className="size-36 ml-20" src={Lg} alt="Logo" />
        </div>
        <h1 className="text-5xl font-bold mt-14 ml-10">UPZERO</h1>
      </div>
    </div>
  );
}

export default Header;
