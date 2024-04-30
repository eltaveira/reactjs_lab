import React from 'react';
/**
 * Sempre que é necessário colocar algum efeito no
 * window ou no document, que não seja um efeito
 * que será adicionado diretamente nos componentes.
 * E esse efeito só pode exitir enquanto o componente
 * existir e estiver renderizado. Deve-se utilizar
 * o useEffect pra tal.
 */
// function Produto() {
//   /**
//    * Dessa forma, sempre que esse componente for renderizado
//    * um eventListener será adicionado e haverá duplicações
//    * de event listeners
//    */
//   function handleScroll(event) {
//     console.log(event);
//   }
//   window.addEventListener('scroll', handleScroll);
//   return (
//     <div
//       style={{
//         height: '200vh'
//       }}>
//       <p>Meu Produto</p>
//     </div>
//   );
// }

// function Produto() {
//   /**
//    * Para resolver o problema acima, utilizamos
//    * o useEffect. Colocamos o registrador de listener
//    * e o seu manipulador dentro do useEffect com zero
//    * dependências.
//    *
//    * Note que ainda sim, o listener é adicionado duas
//    * mais de uma vez. Isso acontece, porque na verdade.
//    * Quem está invokando esse componente, está montando
//    * e desmontando esse componente (removendo-o e inserindo na DOM),
//    * e não só atualizando o estado do componente com useState().
//    * E para lembrar, useEffect sem depêndencia executa somente
//    * uma vez na montagem do componente.
//    *
//    * O que precisa-mos então, é que na desmotagem desse componente.
//    * O listener seja removido junto, já que esse listener é atrelado
//    * ao ciclo de vida desse componente.
//    */
//   React.useEffect(() => {
//     function handleScroll(event) {
//       console.log(event);
//     }
//     window.addEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       style={{
//         height: '200vh'
//       }}>
//       <p>Meu Produto</p>
//     </div>
//   );
// }

function Produto() {
  /**
   * Veja como esse problema é resolvido. Você pode passar
   * retornar uma função para o useEffect e essa função
   * será executada antes que o componente seja demonstado.
   * Então basta passarmos o removedor do listener.
   *
   * Agora o listener vai deixar de existir assim que o
   * componente deixar de existir.
   */
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    /**
     * Observe que para remover esse listener, a função passada
     * para addEventListener não pode ser uma função anônima.
     */
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: '200vh'
      }}>
      <p>Meu Produto</p>
    </div>
  );
}

export { Produto };
