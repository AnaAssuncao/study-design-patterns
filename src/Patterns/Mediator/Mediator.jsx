import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { getImage } from "./Mediator1"
import ExChildren from "./ExChildren";

export default function Mediator() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    (async () => {
      const imgs = await getImage()
      setDogs(imgs)
    })()
  }, [])

  const text = (<p>
    O padrão mediador possibilita que os componentes interajam entre si por meio de um ponto central: o mediador. O mediador recebe as solicitações e as encaminha!
  </p>)

  return (
    <Container title="Mediator" text={text}>
      {
        dogs.length > 0 ?
          <ExChildren dogs={dogs} /> :
          <p>-</p>
      }
    </Container>
  )
}