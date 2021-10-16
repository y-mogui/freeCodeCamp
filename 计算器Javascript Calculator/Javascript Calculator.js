import React, {useState, useMemo} from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(0);
  
  const addTotal = useMemo(() => count + nums, [count, nums]);
  const subtractTotal = useMemo(() => count - nums, [count, nums]);
  const multiplyTotal = useMemo(() => count * nums, [count, nums]);
  const divideTotal = useMemo(() => count / nums, [count, nums]);
  const decimalChange = useMemo(() => count + nums/10, [count, nums]);
  
  return (
    <>
      <div id="display">Count: {count}</div>
      Nums: {nums}
      <button id="equals" onClick={() => setCount(count)}>
        =</button>
      <button id="clear" onClick={() => setNums(0)}>
       ←</button>
    <div id="one-to-three">
      <button id="one" onClick={() => setNums(1)}>1</button>
      <button id="two" onClick={() => setNums(2)}>2</button>
      <button id="three" onClick={() => setNums(3)}>3</button>

      <button id="add" onClick={() => setCount(preCount => addTotal)}>
        +</button>
    </div>
    
    <div id="four-to-six">
      <button id="four" onClick={() => setNums(4)}>4</button>
      <button id="five" onClick={() => setNums(5)}>5</button>
      <button id="six" onClick={() => setNums(6)}>6</button>
      
      <button id="subtract" onClick={() => setCount(preCount => subtractTotal)}>
        -</button>
    </div>
    <div id="seven-to-night">
      <button id="seven" onClick={() => setNums(7)}>7</button>
      <button id="eight" onClick={() => setNums(8)}>8</button>
      <button id="nine" onClick={() => setNums(9)}>9</button>
      
      <button id="multiply" onClick={() => setCount(preCount => multiplyTotal)}>
        *</button>
    </div>
    <div id="others">
      <button id="clear" onClick={() => setCount(0)}>
        C</button>
      <button id="zero" onClick={() => setNums(0)}>0</button>
      <button id="decimal" onClick={() => setNums(preCount => decimalChange)}>.</button>
      
      <button id="divide" onClick={() => setCount(preCount => divideTotal)}>
        /</button>
    </div>
    </>
  );
};


ReactDOM.render(<Counter/>, document.getElementById('counter'));