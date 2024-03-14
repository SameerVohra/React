import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //  let counter = 10;
  let [counter, setCounter] = useState(10);
  const addVal = () => {
    if (counter + 1 >= 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  };
  const delVal = () => {
    if (counter - 1 < 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>HELLO WORLD</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addVal}>INCREASE {counter}</button>
      <button onClick={delVal}>DECREASE {counter}</button>
    </>
  );
}

export default App;
