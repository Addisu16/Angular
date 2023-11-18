import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `<h1>Message Component</h1>
    <p #message>Message 1</p>
    <button (click)="changeText()">Change Msg</button>`,
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @ViewChild('message') messageDomElement!: ElementRef<HTMLParagraphElement>;
  changeText() {
    this.messageDomElement.nativeElement.innerHTML = 'message changed';
  }
  ngOnInit() {
    console.log('ngoninit called'); //execuite the beginng once
  }
  ngAfterViewChecked() {
    console.log('after view called'); //execuite always
  }
}
