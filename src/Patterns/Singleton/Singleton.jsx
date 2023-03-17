import Container from "../../Components/Container/Container";

import { objCounter } from './ClassSingleton1'
import ClassSingleton2 from './ClassSingleton2'


export default function Singleton() {

  const text = (
    <>
      <p>Singletons são classes que podem ser instanciadas uma vez e podem ser acessadas globalmente. Essa única instância pode ser compartilhada em todo o nosso aplicativo, o que torna os Singletons ótimos para gerenciar o estado global em um aplicativo.</p>
    </>
  )
  return (
    <Container title="Singleton" text={text}>
      Cannot access 'personProxy' before initialization

    </Container>
  )
}