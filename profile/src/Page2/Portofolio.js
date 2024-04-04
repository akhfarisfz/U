import React from "react";
import { FaBackspace } from "react-icons/fa";
import imgPf from "../Asset/AssetPorto/aripPf1.png";
import imgPf2 from "../Asset/AssetPorto/aripPf2.png";
import imgPf3 from "../Asset/AssetPorto/portoWeb1.jpg";
import bg from "../Asset/Bacground/bg1.jpg";
import Portofolio1 from "./Portofolio1";
import Portofolio2 from "./Portofolio2";
function Portofolio() {
  return (
    <div
      className="bg-fixed bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <FaBackspace className="size-12 mt-7 ml-20" />
      <div className="flex justify-center pt-5 pb-16">
        <h1 className="text-6xl text-slate-500 font-bold pr-5">Our</h1>
        <h1 className="text-6xl font-bold">Project</h1>
      </div>
      <div>
        <Portofolio1
          src={imgPf}
          alt="Image"
          judul="classification of monkey pox"
          desct="Application to differentiate between common smallpox and monkey pox, by utilizing classification of existing data on common small pox and monkey pox."
        />
        <Portofolio2
          src={imgPf2}
          alt="Image"
          judul="Mini Game"
          desct="Simple games that are easy to play anytime and anywhere, games to train reflexes and train focus."
        />
        <Portofolio1
          src={imgPf3}
          alt="Image"
          judul="IRIS"
          desct="Iris is a useful application for making it easier to access health information. Simple application designed for convenience and flexibility."
        />
      </div>
      <FaBackspace className="size-12 mt-7 ml-20" />
    </div>
  );
}

export default Portofolio;
