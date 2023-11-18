import { Directive, ElementRef, HostBinding, HostListener, Renderer2, inject,Input } from '@angular/core';

@Directive({
  selector: '[appMakeGreen]'
})
export class MakeGreenDirective {
  @Input() appMakeGreen='black';
  #element=inject(ElementRef);//first method
  #renderer=inject(Renderer2);//second method
  @HostBinding('style.color') elementColor:string='black';//third method
   @HostListener('mouseover') elementColorChange(){
    this.#element.nativeElement.style.color=this.appMakeGreen;
   }
  constructor() {
      //this.#element.nativeElement.style.color='yellow';//bad practice
      //his.#renderer.setStyle(this.#element.nativeElement,'color','yellow');//second method
      //this.elementColor='white'

   }
  

}
