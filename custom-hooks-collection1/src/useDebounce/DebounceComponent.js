import { useState } from "react";
import useDebounce from "./useDebounce";

const DebounceComponent = () => {
  const [count, setCount] = useState(10);
  // when the dependency doesn't change anymore, we want to invoke the callback function
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default DebounceComponent;
