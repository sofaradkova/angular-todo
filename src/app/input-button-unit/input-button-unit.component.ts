import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  template: `
  {{title}}
    <input #inputElementRef [value] = title (keyup.enter)="changeTitle(getInputValue($event))">
    <button (click)="changeTitle(inputElementRef.value)">
      save
    </button>
  `,
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title = 'Hello World';

  constructor() {
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
