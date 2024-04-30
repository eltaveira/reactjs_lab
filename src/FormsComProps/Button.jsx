function Button({ items }) {
  console.log('items is an array?: ', Array.isArray(items));
  return <button>Clique</button>;
}

export { Button };
