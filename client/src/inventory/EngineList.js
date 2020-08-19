import React from "react";
import Engine from "./Enigine";

function EngineList() {
  /*This is for the cart*/
  const data = [
    { name: "TRD engineoil", price: 180, id: 1 },
    { name: "TRD Supercharger", price: 1950, id: 2 },
    { name: "TRD Supercharger", price: 2500, id: 3 },
    { name: "GReddy FV", price: 3000, id: 4 },
    { name: "GReddy td05", price: 3000, id: 5 },
    { name: "JDM Universal T3/T4", price: 10000, id: 6 },
  ];
  return (
    <div>
      {data.map((item) => (
        <Engine name={item.name} price={item.price} key={item.id} />
      ))}
    </div>
  );
}

export default EngineList;
