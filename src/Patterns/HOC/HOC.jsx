import React from "react";
import Container from "../../Components/Container/Container";
import DogImages from "./Element";

export default function HOC() {

  const text = (
    <>
      <p>Um componente de ordem superior (HOC, do inglês Higher-Order Component) é uma técnica avançada do React para reutilizar a lógica de um componente.</p>
      <p>Um componente de ordem superior é uma função que recebe um componente e retorna um novo componente.</p>
    </>
  )
  return (
    <Container title="HOC" text={text}>
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </Container>
  );
}