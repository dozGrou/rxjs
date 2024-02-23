import {Component, OnInit} from '@angular/core';
import {combineLatest, interval, of, take} from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  source1$ = interval(1000).pipe(take(4));
  source2$ = interval(1500).pipe(take(3));

  total$ = combineLatest([this.source1$, this.source2$]);

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    console.time('combineLatest');
    this.total$.subscribe(([source1, source2]) => {
      console.timeLog('combineLatest');
      console.log({source1, source2});
    });
  }

}
