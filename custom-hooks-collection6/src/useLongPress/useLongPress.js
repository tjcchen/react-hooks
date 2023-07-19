/**
 * Custom useLongPress Hook
 * 
 * Todo: resolve the empty ref issue
 */
import useTimeout from "../useTimeout/useTimeout";
import useEffectOnce from "../useEffectOnce/useEffectOnce";

const addEventListener = (eventType, callback, element) => {
  element.addEventListener(eventType, callback);
};

const removeEventListener = (eventType, callback, element) => {
  element.removeEventListener(eventType, callback);
};

const useLongPress = (ref, cb, { delay = 250 } = {}) => {
  const { reset, clear } = useTimeout(cb, delay);
  useEffectOnce(clear); // clear the 1st cb invocation

  useEffectOnce(() => {
    // touch start
    addEventListener("mousedown", reset, ref.current);
    addEventListener("touchstart", reset, ref.current);
    // touch end
    addEventListener("mouseup", clear, ref.current);
    addEventListener("mouseleave", clear, ref.current);
    addEventListener("touchend", clear, ref.current);

    return () => {
      removeEventListener("mousedown", reset, ref.current);
      removeEventListener("touchstart", reset, ref.current);
      removeEventListener("mouseup", clear, ref.current);
      removeEventListener("mouseleave", clear, ref.current);
      removeEventListener("touchend", clear, ref.current);
    };
  });
};

export default useLongPress;
