import {Component, OnInit} from '@angular/core';
import {iif, mergeMap, of, Subject} from 'rxjs';

@Component({
  selector: 'app-iif',
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.scss']
})
export class IifComponent implements OnInit {

  button$: Subject<boolean> = new Subject();

  observer$ = this.button$.pipe(
    mergeMap(button => iif(() => button, of('ON'), of('OFF'))),
  );

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    this.observer$.subscribe(console.log);
  }

}
