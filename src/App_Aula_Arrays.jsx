import { Fragment } from "react";

const livros = [
  { nome: "A Game of Thrones", ano: 1996 },
  { nome: "A Clash of Kings", ano: 1998 },
  { nome: "A Storm of Swords", ano: 2000 },
];

function App() {
  const produtos = ["Notebook", "Table", "Smartphon"];

  const produtos_elementos_jsx = [
    // Aqui as keys são sempre importantes
    <li key="e1">Apple</li>,
    <li key="e2">Google</li>,
  ];

  return (
    <Fragment>
      <h1>Arryas no React</h1>
      <h3>Produtos sem map</h3>
      {/* dessa o array de produtos é contatenao em um texto bruto */}
      {produtos}
      <h3>Produtos jsx</h3>
      {/* Já aqui, os arrays estão com elementos jsx li que são renderizados corretamente */}
      <ul>{produtos_elementos_jsx}</ul>

      <h3>Produtos com map</h3>
      {/* e a forma mas adequada com map  */}
      <ul>
        {produtos.map((produto, idx) => (
          <li key={crypto.randomUUID()}>
            {produto} - {crypto.randomUUID()}
          </li>
        ))}
      </ul>
      <h3>Livros com map</h3>
      <ol>
        {livros.map(({ nome, ano }) => (
          <li key={crypto.randomUUID()}>
            {nome} - ano {ano}
          </li>
        ))}
      </ol>
    </Fragment>
  );
}

export { App };
