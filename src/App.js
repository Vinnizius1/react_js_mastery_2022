import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    /* NUNCA MODIFIQUE "STATE" MANUALMENTE! 
      counter = 100;
      ERRADO!
      O "react state" somente pode ser mudado usando a sua própria função "setState",
      no nosso caso "setCounter"!
    */
  }, [])

  return (
    <div className="App">
      <button onClick={() => {setCounter((prevCount) => prevCount - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCount) => prevCount + 1)}}>+</button>
    </div>
  );
};

export default App;
