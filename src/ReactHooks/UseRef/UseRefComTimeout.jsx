import React from 'react';
/**
 * Porque usar useRef para guardar o ID do setTimeout
 * par achamar o clearTimeout?
 *
 * Existem 3 possibilidades para salvar o ID.
 * - Utilizando useState: Desvantagem, teria que fazer o uso do método set,
 * gerando código extra.
 *
 * - Utilizando variável global comum: Pode haver problema de concorrência
 * se essa variável for compartilhada com outro componentes, o que pode gerar
 * efeitos colaterais como condições de corrida.
 *
 * - Utilizando useRef: useRef permite guardar a referência do objeto sem
 * que ele seja perdido a cada atualização/renderização do componente.
 */

function App() {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState();
  const timeoutId = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    /**
     * Use ref, permite memorizar o timeoutID desse componente
     * o que permite que ele seja utilizado para executar o clearTimeout.
     * Isso empende que vários timeOuts sejam encavalados. Ou seja
     * só um timeout pode existir em execução.
     *
     * O ref também permite que não seja necessário criar uma variável
     * global que fica disponível para o arquivo inteiro, bem como não
     * tem necessidade de utilizar context api.
     */
    console.log(timeoutId.current);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setNotificacao();
    }, 500);
    console.log(timeoutId.current);
  }
  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
}
export { App };
