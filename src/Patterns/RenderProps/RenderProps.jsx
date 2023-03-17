import Container from "../../Components/Container/Container";


function ElementProps(props) {
  return (
    <div>
      {props.render()}
    </div>
  )
}


export default function RenderProps() {
  const text = (
    <>
      <p> Uma render prop é uma prop em um componente, cujo valor é uma função que retorna um elemento JSX. O componente em si não renderiza nada além do render prop. Em vez disso, o componente simplesmente chama o render prop, em vez de implementar sua própria lógica de renderização.</p>
    </>
  )

  return (
    <Container title="Render Props" text={text}>
      <ElementProps render={() => (
        <h1>✨ Primeiro render prop! ✨</h1>
      )} />
      <ElementProps render={() => (
        <h2>🔥 Segundo suporte de renderização! 🔥</h2>
      )} />
      <ElementProps render={() => (
        < h3 > 🚀 Terceiro suporte de renderização! 🚀 </ h3 >
      )} />
    </Container>
  )
}