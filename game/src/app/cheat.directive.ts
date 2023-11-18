import { Directive,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[cheat]'
})
export class CheatDirective {

  constructor() { }

  @Input('cheat') color:string=''
  @HostListener('dblclick')alertColor(){
   alert(this.color)
  }

}
