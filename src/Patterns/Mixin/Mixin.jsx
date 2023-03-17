import { useState } from "react";
import Container from "../../Components/Container/Container";

export default function Mixin() {

  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)

  const objFunctions = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    division: (x, y) => x / y,
  };

  const moreFunctions = {
    square: (x) => Math.pow(x, 2),
    triple: (x) => Math.pow(x, 3),
    squareRoot: (x) => Math.sqrt(x),
  }

  const func = Object.assign(objFunctions, moreFunctions);

  const text = (<p>
    O padrão de módulo permite que você divida seu código em partes menores e reutilizáveis.
    Os módulos permitem que você mantenha certos valores em seu arquivo private .
    As declarações dentro de um módulo têm escopo ( encapsulado ) para esse módulo, por padrão. <br />
    Ao criar aplicativos com React podemos separar os componentes em seus próprios arquivos, criando essencialmente um módulo para cada componente.
  </p>)
  return (
    <Container title="Mixin" text={text}>
      <input type='number' onBlur={(e) => setNumberOne(Number(e.target.value))}></input>
      <input type='number' onBlur={(e) => setNumberTwo(Number(e.target.value))}></input>
      <p>{numberOne}+{numberTwo} = {func.add(numberOne, numberTwo)}</p>
      <p>{numberOne}-{numberTwo} = {func.subtract(numberOne, numberTwo)}</p>
      <p>{numberOne}*{numberTwo} = {func.multiply(numberOne, numberTwo)}</p>
      <p>{numberOne}/{numberTwo} = {func.division(numberOne, numberTwo)}</p>

      <p>{numberOne}² = {func.square(numberOne)}</p>
      <p>{numberTwo}³ = {func.triple(numberTwo)}</p>
      <p>{numberOne} = {func.squareRoot(numberOne)}</p>
    </Container>
  )
}