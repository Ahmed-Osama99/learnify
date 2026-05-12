import { useEffect, useState } from "react";

const useFetch = (fetchFn, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setData(null);
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchFn(param);
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [fetchFn, param]);
  return { data, isLoading, error };
};

export default useFetch;
