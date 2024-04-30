import React from 'react';
/**
 * useFetch CUSTOM HOOK
 */
function useFetch() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState();

  /**
   * USO PERFEITO DO useCallback.
   * Função declarada com useCallback, para evitar o efeito colateral
   * de loop infinito. Explicação está no AppFetchCustomHook.jsx.
   */
  const request = React.useCallback(async (url, options) => {
    let response;
    let objAny;
    try {
      setError();
      setLoading(true);
      response = await fetch(url, options);
      objAny = await response.json();
      setData(objAny);
      return { msg: 'request finalizado' };
    } catch (error) {
      setData();
      for (const key of Reflect.ownKeys(error)) {
        const value = Reflect.get(error, key);
        Reflect.defineProperty(error, key, {
          enumerable: true,
          writable: true,
          configurable: true,
          value
        });
      }
      // setError(JSON.stringify(error, null, 2));
      setError(error);
    } finally {
      setLoading(false);
      return { response, objAny };
    }
  }, []);

  return {
    data,
    error,
    loading,
    request
  };
}

export { useFetch };
