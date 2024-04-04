import React from "react";
import Pg2 from "../Asset/AssetPorto/aripPf1.png";
import Pg1 from "../Asset/AssetPorto/portoWeb1.jpg";
function Services() {
  return (
    <div>
      <h2>Our product</h2>
      <div className="grid grid-cols-2">
        <div>
          <h3>Web App</h3>
          <img src={Pg1} alt="gambar" />
        </div>
        <div>
          <h3>Machine Learning</h3>
          <img src={Pg2} alt="gambar" />
        </div>
      </div>
    </div>
  );
}

export default Services;
