import React from "react";
import Exhaust from "./Exhaust";

function ExhaustList() {
  const data = [
    { name: "OEM Toyota TRD", price: 480, id: 1 },
    { name: "TRD Muffler", price: 1800, id: 2 },
    { name: "TRD Sports OEM Spec", price: 2000, id: 3 },
    { name: "Universal 6cm Inlet & Outlet", price: 600, id: 4 },
    { name: "Akraprovic Carbon Fiber", price: 1800, id: 5 },
    { name: "Lancer EVO X", price: 26400, id: 6 },
  ];
  return (
    <div>
      {data.map((item) => (
        <Exhaust name={item.name} price={item.price} key={item.id} />
      ))}
    </div>
  );
}

export default ExhaustList;
