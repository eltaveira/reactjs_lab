import { useState } from 'react';
import { ButtonModal } from 'src/ReactHooks/UseStateComProps/ButtonModal.jsx';
import { Modal } from './Modal';

function App() {
  // Inciando com estado falso normalmente
  // const [modal, setModal] = useState(false);

  /**
   * Porém e possível iniciar o estado através de uma função
   * callback, e essa função pode atribuir o estado de acordo
   * com uma verificação.
   *
   * Nesse caso, o estado inicia de acordo com o localStorage,
   * através da chave 'isActive'.
   */
  const [modal, setModal] = useState(() => {
    const ativo = window.localStorage.getItem('isActive');
    return ativo;
  });

  // passando a função set como refêrencia como propriedade do ButtonModal
  return (
    <div>
      <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
      <Modal
        modal={modal}
        setModal={setModal}
      />
      <ButtonModal setModal={setModal} />
    </div>
  );
}

export { App };
