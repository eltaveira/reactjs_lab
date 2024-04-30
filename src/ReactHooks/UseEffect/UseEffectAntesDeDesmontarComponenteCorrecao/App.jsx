import React from 'react';
import { Produto } from 'src/ReactHooks/UseEffect/UseEffectAntesDeDesmontarComponenteCorrecao/Produto.jsx';
function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  );
}

export { App };
