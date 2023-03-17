import React from "react";
import ContainerComponent from "../../Components/Container/Container";
import ExChildren from "./ExChildren";

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then(res => res.json())
      .then(({ message }) => this.setState({ dogs: message }));
  }

  text = (
    <span>
      Separar a visão da lógica do aplicativo por meios de componentes pai e filho.<br />
      Componentes do contêiner: componentes que se preocupam com quais dados são mostrados ao usuário.<br />
      Componente de apresentação: recebe seus dados por meio de arquivos props. Sua função principal é simplesmente exibir os dados que recebe.<br />
      separação de interesses <br />
    </span>)

  render() {
    return (
      <ContainerComponent title="Container" text={this.text}>
        <ExChildren dogs={this.state.dogs} />
      </ContainerComponent>)
  }
}