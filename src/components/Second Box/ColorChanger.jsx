import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("red");
  const [items, setItems] = useState([
    { id: 1, color: "red" },
    { id: 2, color: "green" },
    { id: 3, color: "blue" },
  ]);

  const handleClick = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, color };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.color }}
            onClick={() => handleClick(item.id)}
          >
            {item.id}
          </div>
        ))}
      </div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
};

export default ColorChanger;
