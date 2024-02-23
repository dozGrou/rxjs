import {Component, OnInit} from '@angular/core';
import {RequestService} from '../request.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-real-cold',
  templateUrl: './real-cold.component.html',
  styleUrls: ['./real-cold.component.scss']
})
export class RealColdComponent implements OnInit {

  futuramaCharacters$: Observable<any> = this.requestService.getFuturamaCharacters();

  constructor(
    private readonly requestService: RequestService,
  ) {
    console.clear();
  }

  ngOnInit(): void {
    // this.futuramaCharacters$.subscribe(console.log);
  }

  getId(_index: number, character: any) {
    return character.id;
  }

}
