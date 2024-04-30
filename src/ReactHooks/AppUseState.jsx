import { useState } from 'react';

/**
 * - Quando o estado do pai é atualizado, o estado dos filhos também serão.
 * - Vários useState pode ser usado.
 * - Utilize estado em objetos que são modificados pelo mesmo motivo (ou seja, juntos).
 */
function App() {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: 'Victor', idade: 25 });
  function handleClick(event) {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'ativo' : 'inativo'}</button>
    </div>
  );
}

export { App };
