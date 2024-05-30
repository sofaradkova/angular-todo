import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputButtonUnitComponent, TodoItemComponent],
  template: `
    <h1>works</h1>
    <app-input-button-unit></app-input-button-unit>
    <ul>
    @for(todoItem of todoList; track todoItem.title) {
      <li>
        <app-todo-item [item] = "todoItem" ></app-todo-item>
      </li>
    }
    </ul>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-2';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
