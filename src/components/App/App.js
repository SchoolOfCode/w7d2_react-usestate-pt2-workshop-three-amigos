import React, { useState } from "react";
import "./App.css";
import Input from "../Input";
import Item from "../Item";

function App() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <Input onChange={handleChange} />
      <Item text={text} font="Arial" color="red" />
      <Item text={text} font="Times New Roman" color="orange" />
      <Item text={text} font="Lucida Console" color="yellow" />
      <Item text={text} font="Copperplate" color="purple" />
      <Item text={text} font="Papyrus" color="blue" />
      <Item text={text} font="Monaco" color="turquoise" />
    </div>
  );
}

export default App;
