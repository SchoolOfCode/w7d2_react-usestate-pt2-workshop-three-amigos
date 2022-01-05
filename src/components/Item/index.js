import React from "react";

function Item({ text, font, color }) {
  return <li style={{ fontFamily: font, color: color }}>{text}</li>;
}

export default Item;
