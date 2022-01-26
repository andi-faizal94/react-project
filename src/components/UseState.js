import React, { useState } from "react";

function UseStates() {
  let [counter, setCounter] = useState(0);
  console.log(setCounter, counter);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <span>{counter}</span>
      <br />
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Min</button>
    </div>
  );
}
export default UseStates;
