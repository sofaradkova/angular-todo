import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListManagerComponent } from './list-manager/list-manager.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListManagerComponent],
  template: `
    <h1 class="app-title">todo list</h1>
    <app-list-manager></app-list-manager>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-2';
}
