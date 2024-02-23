import { Component, OnInit } from '@angular/core';
import {mergeMap, Subject, switchMap} from 'rxjs';
import {RequestService} from '../../request.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  bouton$: Subject<void> = new Subject();

  $characters = this.bouton$.pipe(
    switchMap(() => this.requestService.getFuturamaCharacters()),
  );

  constructor(
    private readonly requestService: RequestService,
  ) {
    console.clear();
  }

  ngOnInit(): void {
    this.$characters.subscribe(console.log);
  }

}
