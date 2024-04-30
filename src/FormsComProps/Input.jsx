// sprend operator e rest pode ser usado para passar propriedades extras
function Input({ label, id, ...props }) {
  console.log(props);
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{label}</label>
      {/* Testar comportamento no babel online  */}
      <input id={id} type="text" {...props} />
    </div>
  );
}

export { Input };
