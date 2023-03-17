import Container from "../../Components/Container/Container";
import React from "react";
import useHooks from "./useHooks";

export default function Hooks() {
  const data = useHooks()

  const text = (
    <p>
      Os hooks possibilitam o uso de métodos de estado e ciclo de vida do React, sem a necessidade de usar um componente de classe ES2015.
    </p>
  )
  if (!data.message) {
    return (
      <Container title="Hooks" text={text}>
        <div>Loading...</div>
      </Container>
    )
  }

  return (
    <Container title="Hooks" text={text}>
      {data.message.map((dog, index) => (
        <img src={dog} alt="Dog" key={index} className='container-img' />
      ))}
    </Container>
  )
}

