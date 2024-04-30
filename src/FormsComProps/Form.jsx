import { Button } from 'src/FormsComProps/Button.jsx';
import { Input } from 'src/FormsComProps/Input.jsx';

function Form() {
  const array = ['Item 1', 'Item 2'];
  return (
    <div>
      {/* Passando propriedades Extras */}
      <Input
        id='email'
        label='Email'
        required
      />
      {/*  esse type password irá subtituir o type="text" no arquivo src/FormsComProps/Input.jsx, pois é um comportamento padrão do spred operator*/}
      {/* [ ] Testar comportamento do password no babel online  */}
      <Input
        id='pass'
        type='password'
        label='Password'
      />
      {/* Todo tipo de dado pode ser passado em uma prop, se string, pode-se usar "" se outros objetos, usa-se {} */}
      {/* Nesse exemplo um array está sendo passado */}
      <Button items={array} />
    </div>
  );
}

export { Form };

const carro = {
  portas: '4',
  // eslint-disable-next-line no-dupe-keys
  portas: '5'
};

// é o portas 5 que vai valer.
console.log(carro);
