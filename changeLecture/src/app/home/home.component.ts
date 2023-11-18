import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home</h1>
    <input #firstName />
    <input #lastName />
    <button (click)="sendMessage(firstName.value, lastName.value)">
      sendMessage
    </button>
    <app-data [send]="message" (msg)="print($event)" /> `,
  styleUrls: ['./home.component.css'],changeDetection:ChangeDetectionStrategy.Default
})
export class HomeComponent {
  message = { firstName: '', lastName: '' };
  sendMessage(firstName: string, lastName: string) {
    this.message = { firstName, lastName };
  }
  msg = '';
  print(message: string) {
    this.msg = message;
  }
}
