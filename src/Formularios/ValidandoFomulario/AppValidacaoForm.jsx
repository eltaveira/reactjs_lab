import React from 'react';
import { Input } from 'src/Formularios/ValidandoFomulario/Input.jsx';

function App() {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      //fazer fetch
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target: { value } }) {
    if (error) validateCep(value);
    setCep(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='CEP'
        id='cep'
        type='text'
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='00000-000'
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
}

export { App };
