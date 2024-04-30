import { useState } from 'react';

/**
 * - Quando o estado do pai é atualizado, o estado dos filhos também serão.
 * - Vários useState pode ser usado.
 * - Utilize estado em objetos que são modificados pelo mesmo motivo (ou seja, juntos).
 */
function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push('Novo Item');
    console.log(items);
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
  }

  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      {/* Mesmo que  handleClick adicione os elementos, o React não vai renderizar os novos elementos sem utilizar setItems*/}
      <button onClick={handleClick}>Adicionar Item</button>
      {/* Já isso será reativo pois handleClickReativo, utilizar useState */}
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  );
}

export { App };
