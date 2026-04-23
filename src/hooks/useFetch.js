import { useEffect, useState } from "react";

const useFetch = (fetchFn) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const result = await fetchFn();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);
  return { data, isLoading, error };
};

export default useFetch;
