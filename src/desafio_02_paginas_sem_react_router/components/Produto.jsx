function Product({ nome, propriedades }) {
  return (
    <div
      style={{
        border: '1px solid',
        margin: '1rem 0',
        padding: '1rem'
      }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map(prop => (
          <li key={crypto.randomUUID()}>{prop}</li>
        ))}
      </ul>
    </div>
  );
}

export { Product };
