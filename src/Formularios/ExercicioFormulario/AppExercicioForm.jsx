import React from 'react';
import { getReactProps, getUniqueID } from 'src/utils';

const formFields = [
  { label: 'Nome', type: 'text', name: 'nome' },
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Senha', type: 'password', name: 'senha' },
  { label: 'Rua', type: 'text', name: 'rua' },
  { label: 'Cep', type: 'number', name: 'cep' },
  { label: 'Número', type: 'number', name: 'numero' },
  { label: 'Bairro', type: 'text', name: 'bairro' },
  { label: 'Cidade', type: 'text', name: 'cidade' },
  { label: 'Estado', type: 'text', name: 'estado' }
];

for (const field of formFields) {
  field.id = getUniqueID();
}

function App() {
  const [form, setForm] = React.useState(
    formFields.reduce((prev, { name }) => {
      prev[name] = '';
      return prev;
    }, {})
  );
  const [response, setResponse] = React.useState();

  function handleChange({ target: { value }, target }) {
    // const { value } = target;
    const { name } = getReactProps(target);
    setForm({ ...form, [name]: value });
  }
  async function handleSubmit(event) {
    // Previne o padrão do formulário que é recarregar a página.
    event.preventDefault();

    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(form)
      }
    );
    setResponse(response);
    console.log(response);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, name, type, label }) => (
          <React.Fragment key={id}>
            <label htmlFor={id}>{label}:</label>
            <input
              id={id}
              name={name}
              type={type}
              value={form[name]}
              onChange={handleChange}
            />
          </React.Fragment>
        ))}
        <button style={{ margin: '.2rem' }}>Enviar</button>
        {response && response.ok && <p>Formulário Enviado</p>}
      </form>
      <button style={{ margin: '.2rem' }} onClick={() => console.log(form)}>
        show state
      </button>
    </React.Fragment>
  );
}

export { App };
