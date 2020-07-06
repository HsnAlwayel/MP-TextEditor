import React, { useState } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [weight, setWeight] = useState(null);
  const [clr, setClr] = useState(null);

  const stylingBoxes = stylings.map((style) => (
    <button onClick={() => setWeight(style)}
      className="btn btn-light" style={styles[style]} key={style}>
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button onClick={() => setClr(color)}
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea style={{ color: clr, fontWeight: weight }} />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
