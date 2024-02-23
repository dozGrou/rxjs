import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.scss']
})
export class ColdObservableComponent implements OnInit {

  snippet: string = `
    const observable = new Observable((observer) => {
      observer.next(Math.random());
    });

    observable.subscribe(console.log); // 0.6983727720088431
    observable.subscribe(console.log); // 0.46258613617473343
  `;

  constructor() {
    console.clear();
  }

  ngOnInit(): void {
    const observable = new Observable((observer) => {
      observer.next(Math.random());
    });

    observable.subscribe(console.log);
    observable.subscribe(console.log);
  }

}
