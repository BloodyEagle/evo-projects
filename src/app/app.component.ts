import {Component, inject} from '@angular/core';
import {Store} from "@ngxs/store";
import {TodoItem, TodoState} from "./todo/todo.state";
import {TodoAddAction, TodoChangeAction, TodoDeleteAction} from "./todo/todo.actions";
import {Observable, take} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos$: Observable<TodoItem[]> = inject(Store).select(TodoState.getTodo);
  count$: Observable<number> = inject(Store).select(TodoState.getCount);
  todoForm: FormGroup = new FormGroup({});

  constructor(
    private store: Store,
    private formBuilder: FormBuilder
  ) {
  }

  addTodo(input: HTMLInputElement) {
    this.todos$.pipe(take(1)).subscribe(todos => {
      const count = this.count$.pipe(take(1)).subscribe(count => {
        this.store.dispatch(new TodoAddAction(count + 1, input.value, false)).subscribe(state => {
          this.todoForm.reset();
          input.focus();
        });
      });

    });
  }

  delTodo(id: number) {
    this.store.dispatch(new TodoDeleteAction(id)).subscribe(state => {
    });
  }

  checkTodo(id: number) {
    this.store.dispatch(new TodoChangeAction(id)).subscribe(state => {
    });
  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }
}
