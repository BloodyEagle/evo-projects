import {Component} from '@angular/core';
import {Todo} from "./interfaces/todo";
import {TodoService} from "./services/todo.service";
import {CounterComponent} from "./counter/counter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show$: any = [];
  public counter: number = 1;

  constructor(private userService: TodoService) {
  }

  public getAllTodos(event: number): void {
    this.counter = event;
    this.userService.getTodos(event).subscribe(
      (response: Todo[]): void => {
        this.show$ = response;
      }
    );
  }

  ngOnInit(): void {
    this.getAllTodos(this.counter);
  }

  protected readonly CounterComponent = CounterComponent;
}
