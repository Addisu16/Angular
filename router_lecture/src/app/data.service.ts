import { Injectable } from '@angular/core';
import {of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
#data=[
  {id:"1",name:'iphone10',price:200},
  {id:"2",name:'iphone12',price:250},
  {id:"3",name:'iphone12 pro',price:300},
  {id:"4",name:'iphone12 pro max',price:350},
  {id:"5",name:'iphone13',price:400},
  {id:"6",name:'iphone14',price:450},
]
get_products(){
  return of(this.#data)
}
get_product_by_id(id:string){
  return this.#data.filter(product=>product.id==id);
  
}
}
