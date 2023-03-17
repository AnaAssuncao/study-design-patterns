import { useState } from "react";
import './Observer.css'
import exObserver from "./ExObserver";

import './Observer.css'

export default function Observer1() {
  const [count, setCount] = useState(0)
  const handleClick2 = () => {
    console.log("Efeito do Observer em outro componente")
    setCount(count + 1)
  }
  exObserver.subscribe('button', handleClick2);

  return (
    <div className={"observer-content"}>
      <div>Efeito do Observer em outro componente</div>
      <div>{count}</div>
    </div>

  )
}