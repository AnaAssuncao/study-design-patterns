import Container from "../../Components/Container/Container";
import { useState } from "react";
import { Manager, AddCommand, CancelCommand } from "./ExCommand"

const manager = new Manager();

export default function CommandPatterns() {
  const [command, setCommand] = useState('')
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    manager.execute(new AddCommand(command))
    setCount(Number(count) + 1)
  }
  const handleCancel = (id) => {
    manager.execute(new CancelCommand(id))
    setCount(Number(count) - 1)
  }

  const text = (
    <>
      <p>Um padrão de projeto comportamental que transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.     </p>
    </>
  )

  return (
    <Container title="Command" text={text}>
      <input type="text" required name='title' placeholder="Nome livro" onBlur={(e) => setCommand(e.target.value)} />
      <button onClick={handleAdd}>Adicionar</button>

      <div>
        {manager.getOrders().map((id) => {
          return (<div>
            <p>{id}</p>
            <button onClick={() => handleCancel(id)}>Cancelar</button>
          </div>)
        })}
      </div>
    </Container>
  )
}
