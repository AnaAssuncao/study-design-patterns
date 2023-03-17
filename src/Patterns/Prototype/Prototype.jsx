import { useState } from 'react'
import Container from "../../Components/Container/Container";
import Prototype1 from './Prototype1'
import Prototype2 from './Prototype2'
import './Prototype.css'

export default function Prototype() {
  const [dog, setDog] = useState(0)

  const text = (
    <span>
      O Prototype é um padrão de projeto criacional que permite copiar objetos existentes sem fazer seu código ficar dependente de suas classes.
      <br /> O protótipo é um objeto nativo do JavaScript e pode ser acessado por objetos por meio da cadeia de protótipos.
      <br /> Clonar objetos sem acoplá-los a suas classes concretas.
    </span>)


  return (
    <Container title="Prototype" text={text}>
      <div className='prototype-container'>
        <button onClick={() => setDog(1)}>Dog 1</button>
        <button onClick={() => setDog(2)}>Dog 2</button>

        <div>
          {
            dog === 1 && <Prototype1 />
          }{
            dog === 2 && <Prototype2 />
          }
        </div>
      </div>
    </Container>
  )
}
