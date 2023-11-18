import { Component,inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a [routerLink]="['']" >Home</a>
      <a [routerLink]="['about']">About</a>
      <a [routerLink]="['product']">products</a>
     
      
    </nav>
    <button (click)="login()" *ngIf="!this.auth.app_signal().id; else logoutuser">Login</button>
    <ng-template  #logoutuser>
    <button (click)="logout()" >LogOut</button>
      <p>welcome: {{auth.app_signal()}}</p>
    </ng-template>
     
    <router-outlet/>
    
  `,
  styles: [
    `a{
      margin:10px
    }`
  ]
})
export class AppComponent {
  auth=inject(AuthService)
  #router=inject(Router);
 login(){
 this.auth.app_signal.set({id:"1",name:'Addisu',email:"addisu@miu.edu"})
 }
 logout(){
  this.auth.app_signal.set({id:"",name:'',email:""})
  this.#router.navigate([''])
 }
}
