import React from "react";

function Portofolio2(props) {
  return (
    <div className="flex">
      <div>
        <img src={props.src} alt={props.alt} />
        <h1>{props.judul}</h1>
        <p>{props.desct}</p>
      </div>
    </div>
  );
}

export default Portofolio2;
