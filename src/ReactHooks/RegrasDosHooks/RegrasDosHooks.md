# Regras de utilização dos Hooks

## Não utilize os hooks dentro de funções, repetições ou condicionais.

```js
function App() {
  // Correto
  React.useEffect(() => {
    document.title = 'Título novo';
  }, []);

  let condicao = true;
  if (condicao) {
    /**
     * ERRADO: Aqui o React vai perder a referência de quem é esse Hook
     * pois se trata de um escopo diferente.
     *
     * O hook não é vinculado ao componente aqui, e sim ao escopo do if
     * que será novo a cada nova renderização do componente.
     */
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  function mudarTitulo(condicao) {
    /**
     * ERRADO: aqui da mesma forma, o React perde a referencia desse
     * hook, visto que ele pertencerá ao escopo de `mudarTitulo()`,
     * e não ao escopo do componente que se mantém vivo enquanto ele
     * está montado na tela.
     */
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  for (let i = 0; i < 10; i++) {
    /**
     * ERRADO: igualmente aqui, a cada repetição do for, um novo
     * callback será registrado e também não será visível ao
     * commponente.
     */
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }
}
```

## Hooks só devem ser utilizados dentro do escopo de componente e dentro de custom hooks.

Novamente, o hook, é algo estritamente vinculado ao componente e pertence ao seu
tempo de vida. Se um componente é desmontado, seus hooks também deixam de
existir.

```js
/**
 * Nesse exemplo, `numeroAleataorio()` está errado, pois é uma função
 * que faz uso de um hook mas está externa a um componente como o `App`
 * logo a baixo.
 *
 * Porém, essa função ainda pode se tornar uma função custom hook
 * simplesmente utilizando a palavra chave `use` ficando `useNumeroAleatorio()`.
 *
 * Ai sim, passa ser possível utilizar número aleatório fora de um componente.
 */
function numeroAleatorio() {
  const numero = Math.random();
  React.useEffect(() => {
    document.title = numero;
  }, []);
  return numero;
}

function App() {
  return <div></div>;
}
```
