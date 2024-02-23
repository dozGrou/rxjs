import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  interval$ = interval(3000).pipe(map(value => `Value ${value}`));

  unsubscribe$: Subject<void> = new Subject();
  intervalTakeUntil$ = this.interval$.pipe(takeUntil(this.unsubscribe$));

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    this.call();
    this.call();

    this.intervalTakeUntil$.subscribe((v) => console.log('takeUntil', v));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  call() {
    this.interval$.subscribe(console.log);
  }

}
