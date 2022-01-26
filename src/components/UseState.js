import React, { useState } from "react";

function UseStates() {
  let [counter, setCounter] = useState(0);
  //   console.log(setCounter, counter);
  //   console.log(counter);
  const increment = () => {
    setCounter(counter + 2);
  };

  const decrement = () => {
    setCounter(counter - 2);
  };

  const multiply = () => {
    setCounter(counter * 2);
  };

  const divide = () => {
    setCounter(counter / 2);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <span>{counter}</span>
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={divide}>:</button>
      <button onClick={multiply}>x</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default UseStates;
