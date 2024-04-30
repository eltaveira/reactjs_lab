import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form/Form";
import { Fragment } from "react";

/**
 * Propriedades (Props)
 *
 * Aula Propriedades de componetes
 *
 * Qualquer tipo de dado pode ser passado para um props
 */

// sem usar desestruturação
function Titulo(props) {
  console.log("children do filho: ", props.children);
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
}

// usando desetruturação
function Paragrafo({ cor, texto, children }) {
  console.log(children);
  return <p style={{ color: cor }}>{texto}</p>;
}

/**
 * Todo o componente tem a propriedade children que
 * que representa o objeto que está dentro do componente
 * quando ele tem abre e fecha, exemplo:
 *
 * <Titulo>Sou um filho</Titulo>
 *
 * A prop `children` de <Titulo> é a string "Sou um filho".
 *
 * <Titulo><p>Eu sou o filho do filho</p></Titulo>
 *
 * A prop `childrne de <Titulo> é um elemento HTML do React.
 */

function Titulo2({ cor, texto, children }) {
  return (
    <h1 style={{ color: cor }}>
      {texto} - {children}
    </h1>
  );
}

function App() {
  return (
    <section>
      <Titulo texto="Meu primeiro Titulo" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
      <Paragrafo cor={"green"} texto={"taveira"} />
      <Paragrafo>
        <p>Eu sou o filho</p>
      </Paragrafo>
      <Titulo2 cor={"blue"} texto="Lindinha">
        Florzinha - <p>Docinha</p>
      </Titulo2>
    </section>
  );
}

export { App };
