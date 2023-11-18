import { Component, ElementRef, QueryList, ViewChildren,inject} from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Score Board</h1>
   
  <p #color>Wins:{{score_states.wins}} - losses:{{score_states.losses}}</p>
   <p [ngStyle]="{'background-color':color_state.computer_choice,height:'200px' ,width:'200px' }" [cheat]="color_state.computer_choice">Hello</p>
  <button (click)="changeColor(color_state.color1)" *ngIf="score_states.wins<10">{{color_state.color1}}</button>
  <button (click)="changeColor(color_state.color2)" *ngIf="score_states.wins<10" >{{color_state.color2}}</button>
  <button (click)="changeColor(color_state.color3)" *ngIf="score_states.wins<10" >{{color_state.color3}}</button>

  <h3>Game History</h3>
  <button (click)="clear()" *ngIf="history_state.length>0">Clear</button>
  <table>
    <th>Computer</th>
    <th>Human</th>
    <th>Wins</th>
    <th>Losses</th>
 
  <tr *ngFor="let history of history_state; even as even" [ngStyle]="{'background-color':even?'red':'green'}">
    <td>{{history.computer}}</td>
    <td>{{history.human}}</td>
    <td>{{history.wins}}</td>
    <td>{{history.losses}}</td>
</tr>
    </table>

<button (click)="handleClick()">SharedData</button>
  `,
  styles: []
})
export class AppComponent {
 #data=inject(MyserviceService);
  //@ViewChildren('button') button!:QueryList<ElementRef>;
  score_states={wins:0,losses:0};
  color_state={color1:'',color2:'',color3:'',computer_choice:''};
  history_state:{computer:string,human:string,wins:number,losses:number}[]=[];
 ngOnInit(){
  this.#getRandomColors();
  const history=localStorage.getItem('Hex');
  if(history){
    this.history_state=JSON.parse(history);
  }
  const lastItem=this.history_state.at(-1)
  this.score_states={wins:lastItem?.wins as number, losses:lastItem?.losses as number}
 }
 
  
  #getRandomColors(){
    const game_colors=[
      this.#generateRandomHexColor(),
      this.#generateRandomHexColor(),
      this.#generateRandomHexColor()
     ]
     this.color_state.color1=game_colors[0];
     this.color_state.color2=game_colors[1];
     this.color_state.color3=game_colors[2];
   
      this.color_state.computer_choice=this.#getRandomItemFromArray(game_colors);
  }
  #generateRandomHexColor(): string {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }
  
  #getRandomItemFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  changeColor(color:string){
    if(color===this.color_state.computer_choice){
    this.score_states.wins++;
    }else{
      this.score_states.losses++;
    }
    this.history_state.push({
      computer:this.color_state.computer_choice,
       human:color,
       wins:this.score_states.wins,
       losses:this.score_states.losses
    })
    localStorage.setItem('Hex',JSON.stringify(this.history_state))
    this.#getRandomColors(); 
    
  }
  clear(){
    this.score_states={wins:0,losses:0};
    this.history_state=[]
    localStorage.removeItem('Hex')
  }
  handleClick(){
    this.#data.data.set({data:this.#data.data().data='Hello World'})
  }
  
}
