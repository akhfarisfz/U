import React from "react";

function Portofolio1(props) {
  return (
    <div className="flex">
      <div>
        <h1>{props.judul}</h1>
        <p>{props.desct}</p>
      </div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Portofolio1;
