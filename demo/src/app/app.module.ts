import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MakegreenDirective } from './makegreen.directive';


@NgModule({
  declarations: [
    AppComponent,
    MakegreenDirective,
 
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
