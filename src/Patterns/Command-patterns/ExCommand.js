export class Manager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }

  getOrders(){
    return this.orders
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

export function AddCommand(order, id) {
  return new Command((orders) => {
    orders.push(order);
    return `You have successfully ordered ${order} (${id})`;
  });
}
 
export function CancelCommand(order) {
  return new Command((orders) => {
    const id = orders.indexOf('order')
    orders.splice(id, 1);
    return `You have canceled your order ${id}`;
  });
}
 