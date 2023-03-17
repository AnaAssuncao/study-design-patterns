import { useState } from "react";
import Container from "../../Components/Container/Container";
import { add, subtract, multiply, division } from "./util.js"

export default function Module() {
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)

  const text = (<p>
    O padrão de módulo permite que você divida seu código em partes menores e reutilizáveis.
    Os módulos permitem que você mantenha certos valores em seu arquivo private .
    As declarações dentro de um módulo têm escopo ( encapsulado ) para esse módulo, por padrão. <br />
    Ao criar aplicativos com React podemos separar os componentes em seus próprios arquivos, criando essencialmente um módulo para cada componente.
  </p>)
  return (
    <Container title="Module" text={text}>
      <input type='number' onBlur={(e) => setNumberOne(Number(e.target.value))}></input>
      <input type='number' onBlur={(e) => setNumberTwo(Number(e.target.value))}></input>
      <p>{numberOne}+{numberTwo} = {add(numberOne, numberTwo)}</p>
      <p>{numberOne}-{numberTwo} = {subtract(numberOne, numberTwo)}</p>
      <p>{numberOne}*{numberTwo} = {multiply(numberOne, numberTwo)}</p>
      <p>{numberOne}/{numberTwo} = {division(numberOne, numberTwo)}</p>
    </Container>
  )
}