import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1 *ngIf="condition; else grade">Hello Addisu</h1>
  <p>Exam Date: {{examDate|date:'long'|mypipe:'Hello'}}</p>
  <p>Bank Balance: {{bankbalance|currency|mypipe:'big value'}}</p>
  <p>UserName: {{studentName|slice:0:5|uppercase|mypipe:"Hello extra"}}</p>

  <p>AsyncValue:{{asyncValue|async}}</p>
    <ng-template [ngOutletContext]="context" #grade>
      <h3 [ngClass]="colorCode">Studet List</h3>
      <div
        appMakeGreen='gray' *ngFor="let item of students; even as even; count as count; index as i"
        [ngStyle]="{ 'background-color': count > 90 ? 'red' : 'green' }"
      >
        <p>{{ i + 1 }}-{{ item.name }}-{{ item.grade }}</p>
      </div>
    </ng-template>
    <button (click)="handleClick() ">Switch</button>
    <button (click)="condition=!condition">ShowList</button>
    <ng-template #hello><h3>Hello World</h3></ng-template>`,
  styles: [
    `
      .colorCode {
        color: Blue;
      }
    `,
  ],
})
export class AppComponent {
  examDate=new Date();//pipe example
  bankbalance=1245678999999999999;//pipe example
  studentName='Adddisusisisiuii';//pipe example
  asyncValue=new Promise(resolve=>{
    setTimeout(()=>resolve('Hello Addisu'),5000)})//mostly used pipes
  colorCode: string[] = [];
  condition = true;

  handleClick() {
    this.colorCode.push('colorCode');
    this.condition = !this.condition;
  }
  students = [
    { name: 'Addis', grade: 99 },
    { name: 'John', grade: 88 },
    { name: 'smith', grade: 95 },
    { name: 'smith', grade: 95 },
    { name: 'smart', grade: 94 },
  ];
}
