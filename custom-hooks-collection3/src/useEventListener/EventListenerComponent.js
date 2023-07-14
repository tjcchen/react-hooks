import { useState } from "react";
import useEventListener from "./useEventListener";

const EventListenerComponent = () => {
  const [key, setKey] = useState("");

  useEventListener("keydown", (e) => {
    setKey(e.key);
  });

  return <div>Last Key: {key}</div>;
};

export default EventListenerComponent;
