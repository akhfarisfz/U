import React from "react";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Ba1 from "../Asset/Bacground/bg2.png";

function Index() {
  const [kata] = useTypewriter({ words: ["UpZero"], loop: {} });
  return (
    <div className="flex my-14 mx-28 space-x-4">
      <div className=" w-3/5 mt-5">
        <h1 className="text-6xl font-bold">Empower Your Business </h1>
        <h1 className="text-6xl font-bold">
          with
          <span className="text-7xl font-bold ml-4 text-slate-400">{kata}</span>
          <Cursor />
        </h1>
        <h1 className="text-xl font-bold mt-5">
          Let's turn your brilliant idea into more advanced technology together
        </h1>
        <Link>
          <button className="bg-slate-400 text-center mt-20 px-7  py-2 font-bold rounded-md text-2xl">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="w-2/5">
        <img className="animate-pulse" src={Ba1} alt="Gambar" />
      </div>
    </div>
  );
}

export default Index;
