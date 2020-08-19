import React from "react";
import Mods from "./Mods";

function ModsList() {
  const data = [
    { name: "TRD Tire Air Caps", price: 150, id: 1 },
    { name: "TRD Fuel Cap", price: 250, id: 2 },
    { name: "TRD Sport Badge", price: 120, id: 3 },
    { name: "TRD push to start button", price: 300, id: 4 },
    { name: "TRD PRO Badge", price: 240, id: 5 },
    { name: "TRD Seat cover set", price: 1500, id: 6 },
    { name: "TRD Shifter", price: 500, id: 7 },
    { name: "TRD Racing shifter", price: 800, id: 8 },
    { name: "TRD Racing pedals", price: 800, id: 9 },
  ];
  return (
    <div>
      {data.map((item) => (
        <Mods name={item.name} price={item.price} key={item.id} />
      ))}
    </div>
  );
}

export default ModsList;
