import React from "react";

function Select({ type, onChange }) {
  return (
    <select onChange={onChange}>
      <option value="">--Please choose a {type}--</option>
      <option value={type === "color" ? "red" : "Arial"}>
        {type === "color" ? "red" : "Arial"}
      </option>
      <option value={type === "color" ? "blue" : "Papyrus"}>
        {type === "color" ? "blue" : "Papyrus"}
      </option>
      <option value={type === "color" ? "yellow" : "Lucida Console"}>
        {type === "color" ? "yellow" : "Lucida Console"}
      </option>
    </select>
  );
}

export default Select;
