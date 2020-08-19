import React from "react";
import Mags from "./Mags";

function MagsList() {
  const data = [
    { name: "TRD Black Split 5 spoke", price: 12000, id: 1 },
    { name: "FR-S TRD Gunmetal grey", price: 10250, id: 2 },
    { name: "TC TRD Black 5 spoke", price: 5500, id: 3 },
    { name: "Toyota TRD Silver Split 7 spoke", price: 3000, id: 4 },
    { name: "NEO TOSCO TRD Vintage Style", price: 4800, id: 5 },
    { name: "TRD TF X-Limited", price: 16500, id: 6 },
  ];
  return (
    <div>
      {data.map((item) => (
        <Mags name={item.name} price={item.price} key={item.id} />
      ))}
    </div>
  );
}

export default MagsList;
