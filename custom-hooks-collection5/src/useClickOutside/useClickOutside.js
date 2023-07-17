/**
 * Custom useClickOutside Hook
 *
 * Useful for modal component
 */
import useEventListener from "../useEventListener/useEventListener";

const useClickOutside = (ref, cb) => {
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null || ref.current.contains(e.target)) {
        return;
      }
      cb(e);
    },
    document
  );
};

export default useClickOutside;
