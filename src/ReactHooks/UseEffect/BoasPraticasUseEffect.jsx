import React from 'react';
/**
 * O ideal, é que coisas executem somente quando
 * é para serem executadas sempre.
 *
 * Se a linha `document.title = 'Total ' + contar;`
 *
 * estivesse do usseEffect que só depende de contar,
 * sempre que o modal trocasse de estado, title seria
 * reatribuido novamente. Ou qualquer outra função fora
 * do useEffect seria executada novamente.
 *
 * E isso é um erro. title não deve ser reatribuido
 * quando o modal abre e fecha, e sim, somente quando
 * o contador altera. Por isso, o useEffect só depende
 * de 'contar'.
 */

function App() {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  React.useEffect(() => {
    setContar(0);
  }, [modal]);

  return (
    <div>
      {modal && <p>Meu Modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export { App };
