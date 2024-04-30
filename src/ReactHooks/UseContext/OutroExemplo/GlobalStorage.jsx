import React from 'react';
import { GlobalContext } from 'src/ReactHooks/UseContext/OutroExemplo/GlobalContext.js';
/**
 * Nesse módulo, é exportado um componente como forma de
 * estorage global, esse componente usa o contexto global
 * importado e faz com que a propriedade filho seja um provider.
 * Ou seja, que esse filho acesse o conteúdo do contexto global.
 *
 * No global é desestrutura a propriedade children. A propriedade
 * children, nada mais será, que o conteúdo que estara dentro
 * do componente GlobalStorage, que for definido pelos componentes
 * que importar GlobalStorage.
 *
 * o children exibido no console.log abaixo, será o componente
 * produto definido no AppUseContext.jsx
 */

/**
 * O nome GlobalStorage é uma convesão. Mas se por exemplo. Estamos
 * lidando com um contexto em que só componentes relacionados ao
 * pode acessar o estado compartilhado, então o componente global
 * poderia ser ProdutoStorage, e aí, só os componentes relacionados
 * a Produto importaria e usaria esse storage.
 */
function GlobalStorage({ children }) {
  // console.log(`GlobalContext.jsx children: ${children}`);
  /**
   * Nome está sendo usado pelo Produto.jsx. Pois ele importou o
   * contexto global.
   *
   * O Produto.jsx, também poderá fazer uso do estado `contar` e do
   * método `setContar`. Ambos globais.
   */
  const [contar, setContar] = React.useState(0);

  /**
   * Veja que é possível também, salvar funções atualizadoras já
   * no próprio GlobalStorage ao invéz de definilas nos componentes
   * que usaram GlobalStorage. Aqui salvamos a função adicionarDois
   * no contexto global, que poderá ser utilizado por um componente
   * button com listener de evento onClick.
   *
   * adicionarDois ainda poderia ser definido com useCallback
   */
  function adicionarDois(event) {
    /**
     * Note que opcionalmente adicionarDois pode receber um evento,
     * já que ele pode ser acionado por um evento.
     */
    console.log('event: ', event);
    setContar(contar + 2);
  }

  return (
    <GlobalContext.Provider
      value={{
        nome: 'Victor',
        contar,
        setContar,
        adicionarDois
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalStorage };
