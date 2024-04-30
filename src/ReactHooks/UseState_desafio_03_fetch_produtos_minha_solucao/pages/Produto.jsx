import React from 'react';

function Produto({ nome, preco, foto }) {
  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco.toFixed(2)}</p>
      <img
        src={foto.src}
        alt={foto.titulo}
      />
    </div>
  );
}

export { Produto };
