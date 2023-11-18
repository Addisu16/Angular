import { Component, inject,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  template: `
    product Id: {{product.name}}-{{product.name}}-{{product.price|currency}}
    <a [routerLink]="['','product','5']" [queryParams]="{name:'Iphone 10'}">Go to iphone10</a>

    <button (click)="back()">Go To list</button>
  `,
  styles: [
  ]
})
export class ProductComponent {
 product={id:'',name:'',price:0}
 #dataService=inject(DataService);
 #router=inject(Router);
  #activaterRoute=inject(ActivatedRoute);
  @Input() product_id:string=''
  constructor(){
    //this.id=this.#activaterRoute.snapshot.paramMap.get("product_id")as string;
    // this.#activaterRoute.paramMap
    // .pipe(takeUntilDestroyed())
    // .subscribe(params=>{
    //   this.id=params.get('product_id')as string;
    // })
  }
  ngOnInit(){
    this.#dataService.get_product_by_id(this.product_id);
    console.log(123)
  }
  back(){
    this.#router.navigate(['','products'])
  }
  
}
