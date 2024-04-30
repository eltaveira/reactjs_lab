import React from 'react';

function App() {
  const [nome, setNome] = React.useState('');
  const nomeId = React.useId();

  return (
    <form>
      {/* A label com o valor de htmlFor sendo o id do element input, permite que ao clicar na labal, seja dado foco no input */}
      <label htmlFor={nomeId}>Nome:</label>
      <input
        id={nomeId}
        type='text'
        // O estado deve sempre ser atribuido a value
        value={nome}
        // A função atualizadora sempre deve estar no onChange
        onChange={({ target: { value } }) => setNome(value)}
      />
      <p>{nome}</p>
    </form>
  );
}

export { App };
