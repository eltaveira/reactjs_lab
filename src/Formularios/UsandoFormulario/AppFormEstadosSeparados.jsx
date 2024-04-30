import React from 'react';

function App() {
  const nomeId = React.useId();
  const [nome, setNome] = React.useState('');

  const emailId = React.useId();
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    // Previne o padrão do formulário que é recarregar a página.
    event.preventDefault();
    console.log(event);
  }

  return (
    // onSubmit no form, também identifica quando a tecla Enter é pressionada.
    <form onSubmit={handleSubmit}>
      {/* A label com o valor de htmlFor sendo o id do element input, permite que ao clicar na labal, seja dado foco no input */}
      <label htmlFor={nomeId}>Nome:</label>
      <input
        id={nomeId}
        type='text'
        // O estado deve sempre ser atribuido a value
        value={nome}
        // A função atualizadora sempre deve estar no onChange
        onChange={({ target: { value } }) => setNome(value)}
        // name será montado como query na URL, com o valor que estiver em name, quando não utilizado preventDefault()
        name='nome'
      />
      <label htmlFor={emailId}>Email:</label>
      <input
        id={emailId}
        type='email'
        // O estado deve sempre ser atribuido a value
        value={email}
        // A função atualizadora sempre deve estar no onChange
        onChange={({ target: { value } }) => setEmail(value)}
        // name será montado como query na URL, com o valor que estiver em name, quando não utilizado preventDefault()
        name='email'
      />
      <button>Enviar</button>
    </form>
  );
}

export { App };
