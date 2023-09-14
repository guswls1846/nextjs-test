"use client";
import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3 data-testid={"counter"}>{count}</h3>
      <button data-testid={"minus-button"} onClick={() => setCount((count)=>count - 1)}>
        -
      </button>
      <button data-testid={"plus-button"} onClick={() => setCount((count)=>count  +1)}>
        +
      </button>
    </div>
  );
};

export default CounterPage;
