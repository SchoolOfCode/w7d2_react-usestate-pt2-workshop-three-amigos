import React, { useState } from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";
import Select from "../Select";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [font, setFont] = useState("Times New Roman");
  const [size, setSize] = useState(14);

  function handleChange(event) {
    console.log(event.target);
    if (event.target.name === "text") {
      setText(event.target.value);
    } else if (event.target.name === "color") {
      setColor(event.target.value);
    } else if (event.target.name === "font") {
      setFont(event.target.value);
    } else if (event.target.name === "size") {
      setSize(event.target.value);
    }
  }

  return (
    <div className="App">
      <Input name="text" onChange={handleChange} />
      <Input name="size" onChange={handleChange} />
      <Select name="color" type="color" onChange={handleChange} />
      <Select name="font" type="font" onChange={handleChange} />
      <Item text={text} font={font} color={color} size={`${size}px`} />
      {/* <Item text={text} font="Times New Roman" color="orange" />
      <Item text={text} font="Lucida Console" color="yellow" />
      <Item text={text} font="Copperplate" color="purple" />
      <Item text={text} font="Papyrus" color="blue" />
      <Item text={text} font="Monaco" color="turquoise" /> */}
    </div>
  );
}

export default App;
