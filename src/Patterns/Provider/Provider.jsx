import Component1 from "./Component1"
import Component2 from "./Component2"
import { DataProvider } from "./DataContext"
import Container from "../../Components/Container/Container";


export default function Provider() {
  const text = (
    <span>
      Disponibilizar dados para vários componentes. Em vez de passar esses dados para cada camada por meio de props, podemos agrupar todos os componentes em um arquivo Provider. Um provedor é um componente de ordem superior fornecido a nós pelo objeto Contexto. Podemos criar um objeto Contexto, usando o createContext() que o React nos fornece.
    </span>)

  return (
    <Container title='Provider' text={text}>
      <DataProvider>
        <Component1 />
        <Component2 />
      </DataProvider>
    </Container>
  )
}