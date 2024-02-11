import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);

  function clickHandle() {
    setResult((from * input) / to);
    // console.log(to, input, from);
  }

  function inputValueHandle(event) {
    setInput(Number(event.target.value));
  }

  function selectFromHandle(event) {
    setFrom(Number(event.target.value));
  }
  function selectToHandle(event) {
    setTo(Number(event.target.value));
  }

  return (
    <>
      <div className="converter-form">
        <Input label="Amount" onChange={inputValueHandle} />
        <div className="row">
          <Select label="From" items={units} onChange={selectFromHandle} />
          <Select label="To" items={units} onChange={selectToHandle} />
          <button onClick={clickHandle}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
