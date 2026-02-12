import { useCallback, useEffect, useState } from "react";

function useFetch<T>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);

      return result as T;
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Un error desconocido ha ocurrido";
      setError(errorMsg);
      return null;
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(options), url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;

// useFetch('', '', '');
/*
 useFetch({
   tuArg1,
   tuArg2,
   tuArg3,
   tuArg4
 });
 */
