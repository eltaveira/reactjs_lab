import React from 'react';

function App() {
  const [ativo, setAtivo] = React.useState(true);
  // Passando uma função callback para a função set, a função set chama sua função passando o estado alterior
  function handleClick() {
    setAtivo(anterior => !anterior);
  }
  console.log('strict mode');
  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
}

export { App };
