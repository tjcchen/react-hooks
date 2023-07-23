/**
 * Implement fetch data logic with use Hook
 * 
 * Benefits:
 * 1. much less code when writing async logic
 * 2. use use-hook anywhere, including the if/else logic
 * 3. use use-hook with useContext, eg: use(Context)
 */
import { use } from "react";

const Data = ({ url, shouldFetch }) => {
  // use hook accepts an promise
  // const data = use(Promise.reject("Error"));
  // const data = use(fetch(url).then((res) => res.json()));

  // use use-hook conditionally
  let data = "default data";
  if (shouldFetch) {
    data = use(fetch(url).then((res) => res.json()));
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Data;
