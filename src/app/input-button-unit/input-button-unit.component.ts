import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  template: `
    <input #inputElementRef [value] = title (keyup.enter)="submitValue(getInputValue($event))" class="todo-input">
    <button (click)="submitValue(inputElementRef.value)" class="btn">
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

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
}
