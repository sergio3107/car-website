import React from "react";
import Intake from "./Intake";

function IntakeList() {
  const data = [
    { name: "BBK Performanace", price: 2000, id: 1 },
    { name: "Spectre Performance", price: 1950, id: 2 },
    { name: "K&N", price: 5500, id: 3 },
    { name: "aFe", price: 1000, id: 4 },
    { name: "Spectre Performanace", price: 8400, id: 5 },
  ];
  return (
    <div>
      {data.map((item) => (
        <Intake name={item.name} price={item.price} key={item.id} />
      ))}
    </div>
  );
}

export default IntakeList;
