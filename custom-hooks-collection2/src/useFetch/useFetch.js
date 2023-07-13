/**
 * Custom useFetch Hook
 *
 * dependency: useAsync hook
 */
import useAsync from "../useAsync/useAsync";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

const useFetch = (url, options = {}, dependencies = []) => {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // return the Promised version of error
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
};

export default useFetch;
