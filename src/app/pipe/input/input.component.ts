import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, map, Observable, Subject, switchMap, tap} from 'rxjs';
import {RequestService} from '../../request.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  input$ = new Subject<string>();

  search$: Observable<any> = this.input$.pipe(
    debounceTime(300),
    map(value => value.trim()),
    distinctUntilChanged(),
    filter(value => value.length > 2),
    switchMap(value => this.requestService.getFuturamaCharactersSearch(value)),
  );

  constructor(
    private readonly requestService: RequestService,
  ) { }

  ngOnInit(): void {
    this.search$.subscribe(console.log);
  }

  onChange($event: Event): void {
    this.input$.next(($event.target as HTMLInputElement).value);
  }

  getId(_index: number, character: any) {
    return character.id;
  }
}
