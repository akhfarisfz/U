import React from "react";
import { Link } from "react-router-dom";
import imgPf from "../Asset/AssetPorto/aripPf1.png";
import imgPf2 from "../Asset/AssetPorto/aripPf2.png";
import imgPf3 from "../Asset/AssetPorto/portoWeb1.jpg";
import Portofolio1 from "../Page2/Portofolio1";
import Portofolio2 from "../Page2/Portofolio2";

function PortoPage1() {
  return (
    <div>
      <div className="flex space-x-4 justify-center mt-24">
        <h1 className="font-bold text-6xl text-blue-400">Project we are</h1>
        <h1 className="font-bold text-6xl">proud of</h1>
      </div>

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
      <div className=" flex justify-center">
        <Link to="/Portofolio">
          <button className="rounded-md justify-center my-10  px-5 py-5 text-white font-bold text-2xl bg-slate-400 hover:bg-slate-700">
            VIEW MORE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PortoPage1;
