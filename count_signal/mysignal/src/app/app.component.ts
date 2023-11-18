import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root'

  template: `
    <h1>Welcome to {{count()}}!</h1>
    <button (click)="inc()">Increase</button>`,
  styles: [],
})
export class AppComponent {
  count = signal<{ n: number }>({ n: 0 });

  inc() {
    this.count.set({n:this.count().n+1})
  }
}
