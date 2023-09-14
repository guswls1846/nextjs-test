import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  return <h3 data-testid={"counter"}>{count}</h3>;
};

export default CounterPage;
