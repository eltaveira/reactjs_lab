import React from 'react';

function Produto({ dados }) {
  console.log(dados);

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {Number(dados.preco).toFixed(2)}</p>
      <img
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      />
    </div>
  );
}

export { Produto };
