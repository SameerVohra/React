import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (e) => {
    console.log(e.target.textContent);
    setColor(e.target.textContent);
  };
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="nav-bar">
        <button className="button" onClick={changeColor}>
          Red
        </button>
        <button className="button" onClick={changeColor}>
          Green
        </button>
        <button className="button" onClick={changeColor}>
          Blue
        </button>
        <button className="button" onClick={changeColor}>
          Olive
        </button>
        <button className="button" onClick={changeColor}>
          Gray
        </button>
        <button className="button" onClick={changeColor}>
          Yellow
        </button>
        <button className="button" onClick={changeColor}>
          Pink
        </button>
        <button className="button" onClick={changeColor}>
          Purple
        </button>
        <button className="button" onClick={changeColor}>
          Lavender
        </button>
        <button className="button" onClick={changeColor}>
          White
        </button>
        <button className="button" onClick={changeColor}>
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
