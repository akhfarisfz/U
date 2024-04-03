import React from "react";
import imgPf from "../Asset/AssetPorto/aripPf1.png";
import Portofolio1 from "./Portofolio1";
import Portofolio2 from "./Portofolio2";
function Portofolio() {
  return (
    <div>
      <div></div>
      <div>
        <Portofolio1
          judul="classification of monkey pox"
          desct="Application to differentiate between common smallpox and monkey pox, by utilizing classification of existing data on common small pox and monkey pox."
          src={imgPf}
          alt="Image"
        />
        <Portofolio2 />
      </div>
      <div></div>
    </div>
  );
}

export default Portofolio;
