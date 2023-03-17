import { useState } from "react";
import Container from "../../Components/Container/Container";

import { personProxy } from './ObjProxy'

export default function Proxy() {
  const [ok, setOk] = useState(false)
  const handleAbout = (e) => {
    personProxy.about = e.target.value
  }

  const text = (
    <span> Proxy é um padrão de projeto estrutural que permite que você forneça um substituto ou um espaço reservado para outro objeto. Ao invés de interagir diretamente com o objeto alvo<br /> Existem varios métodos que pode adicionar ao manipulador Proxy, os dois mais comuns são:<br />
      get:é invocado ao tentar acessar uma propriedade.<br />
      set: é invocado ao tentar modificar uma propriedade'
    </span>)

  return (
    <Container title="Proxy" text={text}>
      <div>
        <div>
          {personProxy.name}
        </div>
        {ok === false ? <div>
          <br />
          <input type="text" required name='about' placeholder="Sobre" onBlur={handleAbout} />
          <button onClick={() => setOk(true)}>OK</button>
        </div>
          :
          <p>{personProxy.about}</p>}
      </div>
    </Container>
  )
}