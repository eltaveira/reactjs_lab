# useId()

`useId` é um Hook que gera `IDs` únicos que podem ser utilizados para relacionar
elementos HTML para diversas finalidades, veja

Relacionar um label com um input do tipo text, para quando clicar no label,
focar no input.

```js
import React from 'react';

function App() {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      {/* A label com o valor de htmlFor sendo o id do element input, permite que ao clicar na labal, seja dado foco no input */}
      <label htmlFor='insira_nome'>Nome:</label>
      <input
        id='insira_nome'
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
```

O problema de deixar isso `hardcoding` é que você acaba expondo um pouco de
detalhes do funcionamento do seu código enviado por navegador. Se você procurar
por `insira_nome` no `.js` gerado, vai encontra-lo.

`useId` é muito bom pra esses casos, veja:

```js
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
```

Agora o ID gerado terá pouco valor semântico no bundler gerado. Usar o useId
também permite melhora de leitura por tecnologias assistivas.
