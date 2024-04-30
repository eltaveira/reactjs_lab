import { Header } from 'src/components/Header.jsx';
import { Footer } from 'src/components/Footer.jsx';
import { Form } from 'src/components/Form/Form.jsx';
import { Fragment } from 'react';

/**
 * Componentes
 *
 * Componentes são necesários para dividir a aplicação em pequenas partes reutilizaveis
 */

function Teste() {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  }
}

function App() {
  return (
    <Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </Fragment>
  );
}

export { App };
