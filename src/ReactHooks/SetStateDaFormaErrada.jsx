import React from 'react';

function App() {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    /**
     * É desejável que setContar não cause efeito coletaral:
     * Um efeito coleteral na chamada de setContar, seria
     * esse método modificar qualquer coisa fora dele.
     * por exemplo modificar o estado de 'items'.
     */
    setContar(valorAnterior => {
      /**
       * Note que na chamada de setContar, o set de items
       * também será chamado, no modo estrito isso irá causar
       * um efeito coleteral onde 'Item 3' será adicionado
       * duas vezes.
       *
       * Então importante, nunca um set estado dentro de outro
       * set estado.
       *
       * set Items deve estar do lado de fora do setContar, ainda
       * que dentro do handleClick.
       */
      // setItems(itemsAnterior => [...itemsAnterior, 'Item ' + (contar + 1)]);
      return valorAnterior + 1;
    });
    // setItems deve estar aqui
    // setItems(itemsAnterior => [...itemsAnterior, 'Item ' + (contar + 1)]);

    /**
     * não precisa passar callback como acima, pois 'contar' está visivel
     * para o setContar, pois está no escopo filho do componente.
     */
    // setContar(contar + 1);

    /**
     * da mesma forma setItems não precisa de callback
     */
    setItems([...items, 'Item ' + (contar + 1)]);
  }

  return (
    <div>
      {items.map(item => (
        <li key={crypto.randomUUID()}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export { App };
