import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {TodoAddAction, TodoChangeAction, TodoDeleteAction} from "./todo.actions";
import {of, tap} from "rxjs";

export class TodoItem {
  constructor(public id: number, public content: string, public done: boolean) {
  }
}

export interface TodoStateModel {
  dataset: TodoItem[];
  count: number;
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    dataset: [],
    count: 0
  }
})
@Injectable()
export class TodoState {
  @Selector()
  static getTodo(state: TodoStateModel) {
    return state.dataset;
  }

  @Selector()
  static getCount(state: TodoStateModel) {
    return state.count;
  }

  @Action(TodoAddAction)
  addTodo({getState, setState}: StateContext<TodoStateModel>, {payload}: TodoAddAction) {
    return of([]).pipe(
      tap(() => {
        const state = getState();
        setState({
          ...state,
          dataset: [...state.dataset, payload].sort((a, b) => a.done ? 1 : -1),
          count: state.count + 1
        });
      })
    );
  }

  @Action(TodoDeleteAction)
  delTodo({getState, setState}: StateContext<TodoStateModel>, {id}: TodoDeleteAction) {
    return of([]).pipe(
      tap(() => {
        const state = getState();
        let newState: TodoStateModel = {
          dataset: [],
          count: state.count
        }
        newState.dataset = state.dataset.filter(item => item.id !== id);
        setState({
          ...newState,
          dataset: [...newState.dataset],
          count: newState.count
        });
      })
    );
  }

  @Action(TodoChangeAction)
  checkTodo({getState, setState}: StateContext<TodoStateModel>, {id}: TodoChangeAction) {
    return of([]).pipe(
      tap(() => {
        const state = getState();
        let newState: TodoStateModel = {
          dataset: state.dataset,
          count: state.count
        };
        newState.dataset = state.dataset.map((item) => {
          if (item.id === id) {
            let newItem: TodoItem = new TodoItem(item.id, item.content, !item.done);
            //item.done = !item.done;
            return newItem;
          }
          return item;
        }).sort((a, b) => a.done ? 1 : -1);
        setState({
          ...newState
        });
      })
    );
  }


}
