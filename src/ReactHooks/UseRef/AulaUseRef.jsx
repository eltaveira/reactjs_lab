import React from 'react';
// function App() {
//   const video = React.useRef();
//   /**
//    * video current ainda é undefinied. a refêrencia
//    * só será atribuida a current, quando o componênte
//    * for montado na tela.
//    */
//   console.log(video);
//   React.useEffect(() => {
//     /**
//      * current aqui já contém <video> pois o useEffect
//      * executa dps que o componente é completamente
//      * renderizado.
//      */
//     console.log(video);
//   }, []);
//   return <video ref={video} />;
// }

/**
 *
 * Um bom uso do useRef é formulários
 */
function App() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    if (input === '') return;

    /**
     * Após setar comentários, o estado de input é alterado para ''
     * para zerar o input text. Porém o foco ainda fica no botão,
     * o que é uma falta de usabilidade pois após o usuário enviar
     * o foco deveria voltar para o input para ter mais inclusões.
     *
     * E nessa hora que entra o useRef no lugar de
     * document.querySelector().
     */
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  function onKeyDownHandler(event) {
    const { code } = event;
    if (code === 'Enter') {
      handleClick();
    }
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, idx) => (
          <li key={idx}>{comentario}</li>
        ))}
      </ul>
      {/* Quando utilizado o value no input é definido como
          objeto que contém estado gerado pelo useState, o react-dom
          gera um warning alegando que você precisa definir uma função
          para chamar o atualizador desse estado, pois quando alterado
          o input, isso não ira refletir no estado.

          Então você deve definir um listener onChange no input text 
          ou defini-lo como readOnly
       */}
      <input
        // readOnly={true}
        // ou
        onChange={({ target: { value } }) => setInput(value)}
        type='text'
        value={input}
        ref={inputElement}
        onKeyDown={onKeyDownHandler}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
export { App };
