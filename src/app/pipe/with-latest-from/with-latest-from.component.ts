import { Component, OnInit } from '@angular/core';
import {map, of, Subject, withLatestFrom} from 'rxjs';

enum Mode {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  READ = 'READ',
}

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {

  bouton$: Subject<void> = new Subject();
  mode$ = of(Mode.CREATE);

  observable$ = this.bouton$.pipe(
    withLatestFrom(this.mode$),
    map(([_, mode]) => mode),
  );

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    this.observable$.subscribe(console.log);
  }

}
