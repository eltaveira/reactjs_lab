import { GlobalContext } from 'src/ReactHooks/UseContext/ExercicioUseContext/Correcao/GlobalContext.js';
import React from 'react';
function ResetProductsStateButton() {
  const { resetProductState } = React.useContext(GlobalContext);
  return (
    <button
      style={{ margin: '.5rem' }}
      onClick={resetProductState}>
      Remover Produtos (ResetProductsStateButton.jsx)
    </button>
  );
}

export { ResetProductsStateButton };
