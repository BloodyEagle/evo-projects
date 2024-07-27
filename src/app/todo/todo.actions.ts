import {TodoItem} from "./todo.state";

export class TodoAddAction {
  static readonly type = '[Todo] Add item';
  payload: TodoItem;
  count!: number;

  constructor(id: number, name: string, done: boolean) {
    this.payload = new TodoItem(id, name, done);

  }
}

export class TodoDeleteAction {
  static readonly type = '[Todo] Delete item';
  id!: number;

  constructor(id: number) {
    this.id = id
  }
}

export class TodoChangeAction {
  static readonly type = '[Todo] Change item';
  id!: number;

  constructor(id: number) {
    this.id = id
  }
}
