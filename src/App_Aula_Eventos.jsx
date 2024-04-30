import { Fragment } from "react";

function App() {
  function handleClick(event) {
    // console.log(event);
    console.log(Object.keys(event).length);
    Reflect.ownKeys(event).forEach((prop) => {
      console.log(prop);
    });
  }

  function handleScroll(event) {
    console.log(event);
    console.log(Reflect.ownKeys(event));
  }
  // Adicionado em elementos html que não são componentes (elementos do index.html)
  window.addEventListener("scroll", handleScroll);

  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <button
        //com função anônima
        onMouseMove={(e) => {
          console.log("mouse mexendo");
        }}
        //passando função por referência, a função cllbk deve receber event
        onClick={handleClick}
      >
        Clique
      </button>
    </div>
  );
}

export { App };
