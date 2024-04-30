import React from 'react';
import { GlobalContext } from 'src/ReactHooks/UseContext/ExercicioUseContext/Correcao/GlobalContext.js';

function GlobalStorage({ children }) {
  const [productState, setProductState] = React.useState();
  /**
   * Ele utilizou o fetch + effect no globalStorage enquanto eu utilizei
   * no componente.
   */
  React.useEffect(() => {
    console.count('useEffect GlobalStorage');
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(res => res.json())
      .then(obj => {
        setProductState(obj);
      });
  }, []);

  const resetProductState = React.useCallback(() => setProductState(), []);

  return (
    <GlobalContext.Provider value={{ productState, resetProductState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalStorage };
