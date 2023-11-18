import { NgModule,inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent,pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'products',component:ProductsComponent,
    children:[
      {path:'products/:product_id',component:ProductComponent}
    ],canActivate:[()=>inject(AuthService).is_logged_in()]},
      {path:'**',redirectTo:''}
    ],{bindToComponentInputs:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
