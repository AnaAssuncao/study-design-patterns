class Observable {
  constructor() {
    this.observers = {
      button: []
    };
  }

  subscribe(objToCallBack, fn) {
    this.observers[objToCallBack].push(fn);
  }

  notifyFunctions(objToCallBack, parameters) {
    this.observers[objToCallBack].forEach((fn) => fn(parameters))
  }
}

export default new Observable()