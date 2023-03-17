class Dog {
  constructor(name,port,color) {
    this.name = name
    this.port = port
    this.color = color
  }

  bark() {
    return `Woof!`;
  }
}

export default Dog