import { Component,inject} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  template: `
    <p *ngFor="let item of products$ |async ">
      <a routerLink="['','products',item.id]">{{item.name}}</a>
     <router-outlet/>
    </p>
  `,
  styles: [
  ]
})
export class ProductsComponent {

  #dataService=inject(DataService);
  products$:Observable<{id:string,name:string}[]>
  constructor(){
    this.products$=this.#dataService.get_products();
    console.log(this.products$)
  }
}
