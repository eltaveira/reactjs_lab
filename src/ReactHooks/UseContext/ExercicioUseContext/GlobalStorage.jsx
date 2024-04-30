import React from 'react';
import { GlobalContext } from 'src/ReactHooks/UseContext/ExercicioUseContext/GlobalContext.js';

function GlobalStorage({ children }) {
  const [globalProduct, setGlobalProduct] = React.useState();
  const resetGlobalProductState = React.useCallback(() => {
    setGlobalProduct();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ setGlobalProduct, resetGlobalProductState, globalProduct }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalStorage };
