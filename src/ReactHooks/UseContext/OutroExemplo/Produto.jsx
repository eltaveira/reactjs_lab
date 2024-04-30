import React from 'react';
import { GlobalContext } from 'src/ReactHooks/UseContext/OutroExemplo/GlobalContext.js';

function Produto() {
  const global = React.useContext(GlobalContext);
  console.log(global);

  function handleClick(event) {
    console.log('evento: ', event);
    // global.setContar(global.contar + 1);
    //ou
    global.setContar(valorAnterior => valorAnterior + 1);
  }
  /**
   * Observe que esse componente Produto faz uso do contexto global, e usa o
   * GlobalStorage que é quem define e guarda os estados globais
   *
   * nome - estado
   * contar - estado
   * setContar - atualizador do estado de contar.
   */
  return (
    <div>
      <p>Produto: {global.nome}</p>
      <p>Contador: {global.contar}</p>
      <button
        style={{ margin: '.5rem' }}
        onClick={handleClick}>
        handleClick() - definido em Produto.jsx
      </button>
      {/* ou */}
      <button
        style={{ margin: '.5rem' }}
        onClick={global.adicionarDois}>
        adicionarDois() - definido em GlobalStorage.jsx - passando evento
      </button>
      {/* ou */}
      <button
        style={{ margin: '.5rem' }}
        onClick={() => global.adicionarDois()}>
        adicionarDois() - definido em GlobalStorage.jsx - não passando evento
      </button>
    </div>
  );
}

export { Produto };
