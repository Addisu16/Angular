import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>App</h1>
    <p>{{ title }}</p>
    <app-data />
    <app-home />
    <p [id]="pid" (click)="handleClick($event, 'hello')">Hello World</p>
    <input (keyup)="printChar($event)" [value]="pid" /> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pid = 'paragraph1';
  title = 'changeLecture';
  handleClick(e: Event, msg: string) {
    console.log(`paragraph is checked`, e, msg);
  }
  printChar(e: KeyboardEvent) {
    console.log(e.key);
  }
}
