# `useCallback()`

O `useCallback()` permite salvar um callback que será utilizado listeners de
evento como o `onClick()` por exemplo. A diferença do `useCallback()` para o
registro do handle diretamente no componte, é que a função callback só é
registrada uma vez na montagem do componente, então essa função callback não é
redeclarada toda vez que o componente é atualizado.
