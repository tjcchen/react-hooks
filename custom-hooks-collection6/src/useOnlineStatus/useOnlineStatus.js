/**
 * Custom useOnlineStatus Hook
 */
import { useState } from "react";
import useEventListener from "../useEventListener/useEventListener";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));

  return online;
};

export default useOnlineStatus;
