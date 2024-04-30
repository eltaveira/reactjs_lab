import React from 'react';
import { useFetch } from 'src/ReactHooks/CustomHooks/UmCustomHookParaOFetch/useFetch.js';
import { useLocalStorage } from 'src/ReactHooks/CustomHooks/UmCustomHookParaLocalStorage/UseLocalStorage.js';
function App() {
  const [produto, setProduto] = useLocalStorage({
    key: 'produto',
    initial: ''
  });
  const { request, data, loading, error } = useFetch();

  const handleClick = React.useCallback(
    ({ target: { innerText } }) => {
      console.log(`inner ${innerText}`);
      console.log(`data ${JSON.stringify(data)}`);
    },
    /**
     * caso essa func acesse o data do lado de fora, e data pode
     * ser modificado, é obrigado que data seja passada
     * como dependencia
     */
    [data]
  );

  React.useEffect(() => {
    (async () => {
      const { response, objAny } = await request(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
      console.log(response, objAny);
    })();
    /**
     * O ESLint, pede para que request seja passado como dependência, pois
     * case esse mude, useEffect a função callback passada pra useEffect
     * deve ser redeclarada com esse novo `request()`.
     *
     * O problema é que se request for definido diretamente no custom hook
     * useFetch, dessa forma
     *
     * function request() {}
     *
     * Irá acontecer um loop infinito, pois ao mesmo tempo que é feito request
     * useFetch é renderizado novamente, realizando uma nova declaração de request
     * que por sua vez, ativa novamente o useEffect desse componente que depende
     * de `request()` a função callback desse useEffect faz novamente uma request,
     * e assim segue o loopInfinito.
     *
     * Por isso que no useFetch, é utilizado um useCallback que memoriza a primeira
     * declaração do request, e não permite que uma nova renderização do useFetch,
     * recrie o request. Assim o loop infinito não acontece.
     */
  }, [request]);

  if (error) {
    return <p>Deu erro na busca de dados</p>;
  }
  if (loading) {
    return <p>Carregando...</p>;
  }
  if (data) {
    return (
      <React.Fragment>
        <p>Produto: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <ul>
          {data.map(({ id, nome }) => (
            <li key={id}>{nome}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
export { App };
