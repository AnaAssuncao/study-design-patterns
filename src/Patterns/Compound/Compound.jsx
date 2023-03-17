import Container from "../../Components/Container/Container";
import { FlyOut, Toggle, List, Item } from "./ExCompond";

import './Compound.css'

const sources = [
  "https://images.pexels.com/photos/939478/pexels-photo-939478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/162829/squirrel-sciurus-vulgaris-major-mammal-mindfulness-162829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

export default function Compound() {

  const text = (
    <>
      <p>Geralmente temos componentes que pertencem uns aos outros. Eles dependem um do outro por meio do estado compartilhado e compartilham a lógica juntos.</p>
      <p>O padrão de componente composto permite criar componentes que trabalham juntos para executar uma tarefa.</p>
    </>
  )
  return (
    <Container title="Compound" text={text}>
      {sources.map((source, i) => (
        <div className="image-item" key={i}>
          <img src={source} alt="Squirrel" />
          <FlyOut>
            <Toggle />
            <List >
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </ List>
          </FlyOut>
        </div>
      ))}
    </Container>
  )
}