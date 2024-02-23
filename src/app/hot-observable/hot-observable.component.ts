import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.scss']
})
export class HotObservableComponent implements OnInit {

  snippet: string = `
    const random = Math.random();

    const observable = new Observable((observer) => {
      observer.next(random);
    });

    observable.subscribe(console.log); // 0.3258971228067473
    observable.subscribe(console.log); // 0.3258971228067473
  `;

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const random = Math.random();
    const observable = new Observable((observer) => {
      observer.next(random);
    });

    observable.subscribe(console.log);
    observable.subscribe(console.log);
  }

}
