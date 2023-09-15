"use client";
import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [onOff, setOnOff] = useState(false);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count - 1)} disabled={onOff}>
        -
      </button>
      <button onClick={() => setCount((count) => count + 1)} disabled={onOff}>
        +
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => setOnOff(!onOff)}
      >
        on/off
      </button>
    </div>
  );
};

export default CounterPage;
