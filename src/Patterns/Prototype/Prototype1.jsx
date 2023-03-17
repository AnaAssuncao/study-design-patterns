import objDog from './objDog'
import './Prototype.css'

export default function Prototype1() {

  class pischerDog extends objDog {
    constructor(name, port, color) {
      super(name, port, color)
    }

    visitArrived() {
      setTimeout(() => {
        alert("Você foi mordido");
      }, 2000)
    }
  }

  const pischer = new pischerDog('Tobi', 'pequeno', 'Preto')

  return (
    <div className='prototype-container'>
      <h2 className='prototype-woof'>{pischer.bark()}</h2>
      <div>
        Nome: {pischer.name}
      </div>
      <div>
        Porte: {pischer.port}
      </div>
      <div>
        Color: {pischer.color}
      </div>
      <h2 className='prototype-woof'>Cuidado!</h2>
      {pischer.visitArrived()}
    </div>
  )
}