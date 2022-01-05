import React from "react";

function Item({ text, font, color, size }) {
  return (
    <li style={{ fontFamily: font, color: color, fontSize: size }}>{text}</li>
  );
}

export default Item;
