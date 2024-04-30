# `UseContext()`

O `useContext()` permite que o estado de um componente, seja compartilhado com
outro componente sem que esse estado tenha que ser passado como propriedade para
o outro componente.

Passar estado por propriedades tem suas limitações, e a medida que a quantidade
de componentes crescem, isso se torna muito trabalhoso. Exemplo, passar uo
estado para um componenete irmão, passar estado para um componente filho, passar
estado para um componente que não tem nada a ver com o componente dono do estado
e que está em outro lugar da aplicação.

Onde utilizar o contexto? na parte mais global da aplicação ou onde você quizer
que haja esse contexto.

Por exemplo, um modulo complexo que trata apenas coisas relacionadas ao Produto,
o contexto pode ser importado apenas para esse módulo.

`createContext()` cria um objeto context. Esse objeto pode ser exportado e
posteriormente importado pelo modo que deseja enxergar o estado guardado nesse
contexto. Esse objeto tem duas propriedades princípais, o `Provider ` e o
`Consumer`;
