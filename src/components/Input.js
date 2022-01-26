import React, { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");

  const addButton = (event) => {
    event.preventDefault();
    setInputValue(inputValue);
  };
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <form>
        {inputValue}
        <br />
        <input onChange={onChange} placeholder="ketikan sesuatu" />
        <button onClick={addButton}>Add</button>
      </form>
    </>
  );
}

export default Input;
