import { Button } from 'src/components/Form/Button.jsx';
import { Input } from 'src/components/Form/Input.jsx';

function Form() {
  return (
    <form action=''>
      <p>
        <label htmlFor='nome'></label>
        <Input />
      </p>
      <p>
        <label htmlFor='email'></label>
        <Input />
      </p>
      <Button />
    </form>
  );
}

export { Form };
