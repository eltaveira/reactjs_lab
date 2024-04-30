import React from 'react';
import { Produto } from 'src/ReactHooks/UseEffect/UseEffectAntesDeDesmontarComponente/Produto.jsx';
function App() {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <React.Fragment>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Ativar' : 'Desativar'}
      </button>
    </React.Fragment>
  );
}

export { App };
