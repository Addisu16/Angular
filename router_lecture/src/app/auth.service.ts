import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  app_signal=signal({id:'',name:'',email:''});
  is_logged_in(){
    return this.app_signal().id===''?false:true;
  }
}
