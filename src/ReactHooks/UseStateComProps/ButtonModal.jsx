function ButtonModal({ setModal }) {
  /**
   * Note que não é preciso que usando callback na função set
   * permite que não seja necessário passar o estado via propriedade
   * do componente.
   */
  function handleClick() {
    setModal(previous => !previous);
  }

  return <button onClick={handleClick}>Abrir</button>;
  // return <button onClick={() => setModal(true)}>Abrir</button>;
}

export { ButtonModal };
