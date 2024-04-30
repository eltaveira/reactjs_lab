import React from 'react';
import { getReactProps } from 'src/utils';

function App() {
  const nomeId = React.useId();
  const emailId = React.useId();

  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  });

  function handleSubmit(event) {
    // Previne o padrão do formulário que é recarregar a página.
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { value } = target;
    const { name } = getReactProps(target);
    setForm({ ...form, [name]: value });
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
        value={form.nome}
        // A função atualizadora sempre deve estar no onChange
        onChange={handleChange}
        // name será montado como query na URL, com o valor que estiver em name, quando não utilizado preventDefault()
        name='nome'
      />
      <label htmlFor={emailId}>Email:</label>
      <input
        id={emailId}
        type='email'
        // O estado deve sempre ser atribuido a value
        value={form.email}
        // A função atualizadora sempre deve estar no onChange
        onChange={handleChange}
        // name será montado como query na URL, com o valor que estiver em name, quando não utilizado preventDefault()
        name='email'
      />
      <button>Enviar</button>
    </form>
  );
}

export { App };
