import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent {

}

// <form action="" [formGroup]="loginForm" (ngSubmit)="Submit()">
//       <input type="text" placeholder="username" formControlName="username"/>
//       <input type="text" placeholder="password" formControlName="password"/>
//       <button type="submit" [ngSubmit]>Submit</button>
//     </form>

//inside app componennet
 
//loginForm=inject(FormBuilder).nonNullable.group({
  //we can make it empty string or array[the firts vakue id the form value an the second is form validation]
  //username:['',Validators.compose],
  //password:''
//})
//Submit(){
//console.log(this.loginForm.value);
//}
//constructor(){
//username.vakue.pathMatch('new value')//to update the from 
//this.loginForm.valueChanges.subscribe(console.log);//to listen all of the inputs
//this.loginForm.get('username')?.valueChanges.subscribe(console.log);//to control th certain logic from username
//}
//}
