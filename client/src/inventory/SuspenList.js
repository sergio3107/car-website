import React from "react";
import Suspension from "./Suspension";

function SuspenList() {
  const data = [
    { name: "Performance Air kit", price: 50000, id: 1 },
    { name: "AIRMEXT Suspension", price: 35000, id: 2 },
    { name: "Subaru WSX/STI Kit", price: 45000, id: 3 },
    { name: "PAC Performance", price: 25000, id: 4 },
    { name: "Belltech Lowering Kit", price: 35000, id: 5 },
    { name: "Coils", price: 3000, id: 6 },
  ];
  return (
    <div>
      {data.map((item) => (
        <Suspension name={item.name} price={item.price} key={item.id} />
      ))}
    </div>
  );
}

export default SuspenList;
