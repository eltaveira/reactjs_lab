# Input em formulários React

O input de texto deve ser que tem o valor inicial definido por um estado, deve
sempre ser acompanhado por uma função atualizadora que atualiza o estado
passando o novo valor do `event.target.value`.

Ou então, se esse input é alterado via script apenas, e o usuário não tem a
possibilidade de alterar o conteúdo, pode-se utilizar o `readOnly={true}`, que o
ESLint para de reclamar.
