import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {delay, Observable, of, shareReplay, startWith} from 'rxjs';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {

  message$ = this.requestService.getMessage();

  constructor(
    private readonly requestService: RequestService,
  ) {
    console.clear();
  }

  ngOnInit(): void {
    this.message$.subscribe({
      next: (message) => console.log('next', message),
      complete: () => console.log('complete'),
      error: () => console.log('error'),
    });
  }

}
