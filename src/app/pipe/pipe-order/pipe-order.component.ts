import {Component} from '@angular/core';
import {delay, of, startWith} from 'rxjs';

@Component({
  selector: 'app-pipe-order',
  templateUrl: './pipe-order.component.html',
  styleUrls: ['./pipe-order.component.scss']
})
export class PipeOrderComponent {

  source$ = of(1, 2, 3, 4)
  observable$ = this.source$.pipe(
    delay(2000),
    startWith(0),
  );

  observable1$ = this.source$.pipe(
    startWith(0),
    delay(2000),
  );

  constructor() {
    console.clear();
  }

  startWithAuDebut() {
    console.log('startWithAuDebut appuyé');
    console.time('debut');
    this.observable1$.subscribe(v => {
      console.timeLog('debut');
      console.log(v);
    });
  }

  startWithALaFin() {
    console.log('startWithALaFin appuyé');
    console.time('fin');
    this.observable$.subscribe(v => {
      console.timeLog('fin');
      console.log(v);
    });
  }

}
