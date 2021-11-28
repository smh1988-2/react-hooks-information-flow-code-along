import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const childRandomColor = getRandomColor();

  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState(childRandomColor);

  function handleChangeColor() {
    setColor(randomColor);
    setChildColor(childRandomColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childColor} onChangeColor={handleChangeColor} />
      <Child color={childColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
