function Button({ action, children }) {
  return (
    <button
      style={{ margin: '.5rem' }}
      // alternativa
      // onClick={() => action(children)}>
      onClick={action}>
      {children}
    </button>
  );
}

export { Button };
