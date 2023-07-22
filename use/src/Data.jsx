/**
 * Experimental use hook
 */
import { useEffect, useState } from "react";

const Data = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    setData(undefined);

    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [url]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : isError ? (
    <h3>Error</h3>
  ) : (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
};

export default Data;
