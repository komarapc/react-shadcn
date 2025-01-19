import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((val) => val + 1)}>Increment</button>
      {count}
      <button onClick={() => setCount((val) => val - 1)}>Decrement</button>
    </>
  );
}
