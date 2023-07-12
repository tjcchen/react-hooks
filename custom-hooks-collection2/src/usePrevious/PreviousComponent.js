import { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Andy");
  const previousCount = usePrevious(count);

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
};

export default PreviousComponent;
