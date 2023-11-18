import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `<h1 *ngIf="cond; else addis">Hello Addis</h1>
    <button (click)="(switch)">Switch</button>
    <ng-template #addis><h1>Hello World</h1></ng-template>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cond = true;
  switch() {
    this.cond = !this.cond;
  }
}
