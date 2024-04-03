import React from "react";

function Portofolio1(props) {
  return (
    <div className="flex my-20 mx-20">
      <div className="bg-slate-500">
        <h1 className="font-bold text-5xl mt-14 mx-10">{props.judul}</h1>
        <p className="text-xl mx-10">{props.desct}</p>
      </div>
      <div>
        <img className="rounded-lg size-96" src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}

export default Portofolio1;
