/**
 * Custom useMediaQuery Hook
 * 
 * window.matchMedia() -> eg: 
 *   let mql = window.matchMedia("(max-width: 600px)");
 *   document.querySelector(".mq-value").innerText = mql.matches;
 * 
 * The Window interface's matchMedia() method returns a new MediaQueryList object that
 * can then be used to determine if the document matches the media query string,
 * as well as to monitor the document to detect when it matches (or stops matching) that media query.
 * 
 */
import { useState, useEffect } from "react";
import useEventListener from "../useEventListener/useEventListener";

const useMediaQuery = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
};

export default useMediaQuery;
