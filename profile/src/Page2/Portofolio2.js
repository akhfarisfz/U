import React from "react";

function Portofolio2(props) {
  return (
    <div className="flex px-24 py-5">
      <div className="w-2/5 ">
        <img className="rounded-2xl " src={props.src} alt={props.alt} />
      </div>
      <div className=" w-3/5">
        <h1 className="font-bold text-5xl mt-28 pl-16">{props.judul}</h1>
        <p className="text-xl my-10 pr-10 pl-16">{props.desct}</p>
      </div>
    </div>
  );
}

export default Portofolio2;
