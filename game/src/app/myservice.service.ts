import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
data = signal({data:''})
  constructor() { }
}
