import React, { useState } from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";
import Select from "../Select";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [font, setFont] = useState("Times New Roman");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleFontChange(event) {
    setFont(event.target.value);
  }

  return (
    <div className="App">
      <Input onChange={handleTextChange} />
      <Select type="color" onChange={handleColorChange} />
      <Select type="font" onChange={handleFontChange} />
      <Item text={text} font={font} color={color} />
      {/* <Item text={text} font="Times New Roman" color="orange" />
      <Item text={text} font="Lucida Console" color="yellow" />
      <Item text={text} font="Copperplate" color="purple" />
      <Item text={text} font="Papyrus" color="blue" />
      <Item text={text} font="Monaco" color="turquoise" /> */}
    </div>
  );
}

export default App;
