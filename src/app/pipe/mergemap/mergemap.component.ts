import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../request.service';
import {mergeMap, Subject} from 'rxjs';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  bouton$: Subject<void> = new Subject();

  $characters = this.bouton$.pipe(
    mergeMap(() => this.requestService.getFuturamaCharacters()),
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
