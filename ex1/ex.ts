import { from, of } from "rxjs";
import { map, tap, filter, take, mergeAll } from "rxjs/operators";

from([1, 2, 3, 4])
  .pipe(
    take(2),
    map((x) => of(1, 2)),
    mergeAll(),
    filter((n) => n >= 2)
  ).subscribe((x) => console.log(x));
