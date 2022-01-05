import React from "react";

function Input({ onChange, name }) {
  return (
    <input
      name={name}
      type={name === "text" ? "text" : "number"}
      onChange={onChange}
      min={name === "size" ? "12" : null}
      max={name === "size" ? "100" : null}
    />
  );
}

export default Input;
