let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) { 
      console.log("You can only create one instance!")
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

export const objCounter = new Counter();

try{
  const counter2 = new Counter();
}
catch{
  console.log("Erro!")
}
