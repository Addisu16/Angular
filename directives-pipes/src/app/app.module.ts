import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MakeGreenDirective } from './make-green.directive';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MakeGreenDirective,
    MypipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
