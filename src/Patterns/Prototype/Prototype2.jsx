import objDog from './objDog'

export default function Prototype2() {

  class curDog extends objDog {
    constructor(name, port, color) {
      super(name, port, color)
    }
  }

  const cur = new curDog('Caramelo', 'medio', 'Caramelo')

  return (
    <div>
      <h2 className='prototype-woof'>{cur.bark()}</h2>
      <div>
        Nome: {cur.name}
      </div>
      <div>
        Porte: {cur.port}
      </div>
      <div>
        Color: {cur.color}
      </div>
      <h2 className='prototype-woof'>Melhor cachorro!</h2>
    </div>
  )
}