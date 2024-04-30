import React from 'react';
import { Input } from 'src/Formularios/ComponentizandoElementosFormulario/Form/Input.jsx';
import { Select } from 'src/Formularios/ComponentizandoElementosFormulario/Form/Select.jsx';
import { Radio } from 'src/Formularios/ComponentizandoElementosFormulario/Form/Radio.jsx';
import { Checkbox } from 'src/Formularios/ComponentizandoElementosFormulario/Form/Checkbox.jsx';
function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('Vermelho');
  const [fruta, setFruta] = React.useState('Laranja');
  const [linguagens, setLinguagens] = React.useState(['PHP']);
  const [termos, setTermos] = React.useState([]);
  // verificando se termo está assinado ou não
  if (termos.length > 0) {
    console.log('termo assinado');
  }

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />

      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={['Limão', 'Laranja', 'Uva']}
        value={fruta}
        setValue={setFruta}
      />

      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      {/* required e value são passados de forma desestruturada */}
      <Input id='nome' label='Nome' value={nome} setValue={setNome} required />
      <Input id='email' label='Email' value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
}

export { App };
