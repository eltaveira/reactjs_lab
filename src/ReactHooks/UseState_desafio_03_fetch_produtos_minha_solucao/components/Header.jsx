import { Button } from 'src/ReactHooks/desafio_03_fetch_produtos_minha_solucao/components/Button.jsx';

function Header({ buttonAction }) {
  return (
    <div>
      <Button action={buttonAction}>notebook</Button>
      <Button action={buttonAction}>smartphone</Button>
      <Button action={buttonAction}>tablet</Button>
    </div>
  );
}

export { Header };
