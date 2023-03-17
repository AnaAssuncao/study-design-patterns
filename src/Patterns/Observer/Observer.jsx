
import { useState } from "react";
import Container from "../../Components/Container/Container";
import exObserver from "./ExObserver"
import Observer1 from "./Observer1";

import './Observer.css'

export default function Observer() {
  const [color, setColor] = useState(false)
  const handleClick = () => {
    console.log("Clicou no botão")
  }
  const handleClick1 = () => {
    console.log("Mudou cor")
    setColor(!color)
  }
  exObserver.subscribe('button', handleClick);
  exObserver.subscribe('button', handleClick1);

  const text = (
    <span>Permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.<br />
      Observador que notifica eventos.<br />
      observers: uma matriz de observadores que serão notificados sempre que um evento específico ocorrer<br />
      subscribe(): um método para adicionar observadores à lista de observadores<br />
      unsubscribe(): um método para remover observadores da lista de observadores<br />
      notify(): um método para notificar todos os observadores sempre que um evento específico ocorre
    </span>)

  return (
    <Container title="Observer" text={text}>
      <div className={color ? "observer-color" : "observer"}></div>
      <button onClick={() => exObserver.notifyFunctions('button')}>Click me!</button>

      <Observer1 />
    </Container>
  )
}