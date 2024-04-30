import { UserContext } from 'src/ReactHooks/UseContext/UserContext.jsx';
import { Produto } from 'src/ReactHooks/UseContext/Produto.jsx';

function App() {
  console.log(UserContext);
  /**
   * O compoente <Produto/> tem acesso ao contexto de UserContext.
   * depois de ser envolvido pelo Provider de UserContext.
   *
   * No provider, é definido uma propriedade value. Que guarda um
   * simples objeto. Para que <Produto/> acesse esse objeto, ele fará
   * uso da função `React.useContext()` e lógico, fazer import do
   * UserContext.jsx
   */
  return (
    /**
     * Qualquer tipo de objeto pode ser passado para o `value` de Provider
     * por exemplo, um objeto de estado que pertence a esse componente `App`
     * bem como sua função atualizadora.
     */
    <UserContext.Provider value={{ nome: 'Victor ' }}>
      <Produto />
    </UserContext.Provider>
  );
}

export { App };
