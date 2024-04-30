import React from 'react';
/**
 * O operador de espalhamento vai pegar todos as
 * propriedades que não foram desestruturadas nos parâmetros
 * de Input(), e vai desestruturar nas propriedades abaixo.
 * Isso só é possível para as propriedades que vem com o mesmo
 * key que será utilizado nesse <input>. No caso, vem as
 * propriedades `value` e `required`.
 *
 * apesar do id, ser a mesma chave da que vem no componente App
 * ele precisa ser desestruturado para ser utilizado no label.
 */
function Input({ id, label, onChange, ...props }) {
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
        id={id}
        name={id}
        /**
         * Ao invés do Input conter o setValue ele recebe a função que alterar
         * do lado de fora.
         */
        onChange={onChange}
        /**
         * Aqui, os colchetes são do JSX.
         */
        {...props}
      />
    </React.Fragment>
  );
}

export { Input };
