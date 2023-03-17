const person = {
  name: "Ana",
  age: 27,
  nationality: "Brasileira",
  about: ''
};


export const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
    return `A descrição ${prop} é ${obj[prop]}`
  },
  set: (obj, prop, value) => {
    if (value && obj[prop] !== value) {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
      return true;
    }
  }
});