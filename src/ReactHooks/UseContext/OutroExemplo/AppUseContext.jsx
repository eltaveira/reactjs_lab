import { Produto } from 'src/ReactHooks/UseContext/OutroExemplo/Produto.jsx';
import { GlobalStorage } from 'src/ReactHooks/UseContext/OutroExemplo/GlobalStorage.jsx';

function App() {
  return (
    <GlobalStorage>
      {/* Todos aqui, é filho do GlobalStorage, e todos terão acesso ao estado compartilhado */}
      {/* Para que produto acesse o value definido em GlobalStorage, Produto.jsx precisa importar o GlobalContext.jsx e fazer uso do método useContext() */}
      <Produto />
    </GlobalStorage>
  );
}

export { App };
