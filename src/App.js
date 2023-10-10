import { useState, useMemo } from "react";
import "./styles.css";
import calc from "./Calc";

export default function App() {
  const [values, updateValues] = useState(true);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const calResult = useMemo(
    function cal() {
      return values ? Number(val1) + Number(val2) : Number(val1) - Number(val2);
    },
    [val1, val2, values]
  );

  // function addition(event) {
  //   console.log("val1 : ", val1);
  //   console.log("val2 : ", val2);
  //   const value = {
  //     val1: val1,
  //     val2: val2
  //   };
  //   updateValues([...values, value]);
  // }

  // function handleChange1(event) {
  //   setVal1(event.target.value);
  // }

  // function handleChange2(event) {
  //   setVal2(event.target.value);
  // }

  return (
    <div className="App">
      <h1>My Calculator</h1>
      <div>Current : Val1 : {val1}</div>
      Current : Val2 : {val2}
      <div>
        <input
          type="number"
          name="val1"
          placeholder="Enter value 1"
          onChange={(event) => {
            setVal1(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="number"
          name="val2"
          placeholder="Enter value 2"
          onChange={(event) => {
            setVal2(event.target.value);
          }}
        />
      </div>
      {/* <div>
        <button onClick={addition}>Addition</button>
        <button onClick={deduction}>Deduction</button>
      </div>
      {values.map((current, index) => {
        return <Calc val1={current.val1} val2={current.val2} />;
      })}
    </div>
  ); */}
      <div></div>
      <button id="add" onClick={() => updateValues(true)}>
        {" "}
        Add{" "}
      </button>
      <div></div>
      <button onClick={() => updateValues(false)}> Subtract </button>
      <div></div>
      <input type="text" id="num3" value={calResult} />
    </div>
  );
}
