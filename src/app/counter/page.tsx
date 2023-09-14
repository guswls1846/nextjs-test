"use client";
import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [onOff, setOnOff] = useState(false);
  return (
    <div>
      <h3 data-testid={"counter"}>{count}</h3>
      <button
        data-testid={"minus-button"}
        onClick={() => setCount((count) => count - 1)}
        disabled={onOff}
      >
        -
      </button>
      <button
        data-testid={"plus-button"}
        onClick={() => setCount((count) => count + 1)}
        disabled={onOff}
      >
        +
      </button>
      <button
        data-testid={"on-off-button"}
        style={{ backgroundColor: "blue" }}
        onClick={() => setOnOff(!onOff)}
      >
        on/off
      </button>
    </div>
  );
};

export default CounterPage;
