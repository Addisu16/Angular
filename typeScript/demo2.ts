import {of,from} from 'rxjs';
import { map,tap } from 'rxjs/operators';

// class Course{
//     // name;  this is the way we can declare if we are not using constructor and inside it identifier
//     constructor(public name:string,public code:number){
//         // this.name=name;
//         // this.code=code;
//     }
// }
console.log('start')
from([1,2,3,4])
.pipe(
    tap(n=>console.log(n)),
    map(n=>n+2),
).
subscribe(console.log)
console.log('end')