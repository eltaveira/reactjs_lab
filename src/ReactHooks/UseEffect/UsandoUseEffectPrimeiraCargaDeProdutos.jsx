import React from 'react';

function App() {
  const [dados, setDados] = React.useState();
  const [contar, setContar] = React.useState(1);
  /**
   * Os produtos são buscados pela primeira vez
   * assim que o componente é montado na tela.
   *
   * Se o array fosse omitido um loop infinido
   * acontece.
   */
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
      .then(rawProduct => rawProduct.json())
      .then(jsObj => setDados(jsObj));
  }, []);

  return (
    <React.Fragment>
      {dados && (
        <React.Fragment>
          <h1>{dados.nome}</h1>
          <p>R$ {(Number(dados.preco) * contar).toFixed(2)}</p>
          {/* <img
            src={dados.fotos[0].src}
            alt={dados.fotos[0].titulo}
          /> */}
        </React.Fragment>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </React.Fragment>
  );
}

export { App };
