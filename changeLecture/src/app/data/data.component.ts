import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  template: `<h1>Data componenet</h1>
    <p #paragraph>
      {{ send.firstName }}-{{ send.lastName }}
      <input #messageInput />
      <button (click)="sending(messageInput.value)">
        Send Message to Home
      </button>
    </p>`,
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  @Input('send') send: { firstName: string; lastName: string } = {
    firstName: '',
    lastName: '',
  };
  @Output() msg = new EventEmitter<string>();
  sending(message: string) {
    this.msg.emit(message);
  }
}
