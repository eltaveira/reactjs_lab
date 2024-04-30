import React from 'react';

const coresPadrao = [
  'azul',
  'roxo',
  'laranja',
  'verde',
  'vermelho',
  'amarelo',
  'cinza'
];

function App() {
  const [coresSelecionadas, setCoresSelecionadas] = React.useState(['amarelo']);

  function handleChange({ target: { value, checked } }) {
    if (checked) {
      setCoresSelecionadas([...coresSelecionadas, value]);
    } else {
      setCoresSelecionadas(coresSelecionadas.filter(cor => cor !== value));
    }
  }

  return (
    <form>
      {coresPadrao.map(cor => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type='checkbox'
            value={cor}
            checked={coresSelecionadas.includes(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <ul>
        {coresSelecionadas.map(cor => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
}

export { App };
