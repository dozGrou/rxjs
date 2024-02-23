import {Injectable} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getMessage(): Observable<string> {
    return of('Hello World');
  }

  getFuturamaCharacters() {
    return this.http.get<[]>('https://api.sampleapis.com/futurama/characters');
  }

  getFuturamaCharactersSearch(search: string) {
    return this.getFuturamaCharacters().pipe(
      // @ts-ignore
      map(characters => characters.filter(character => character.name.first.toLowerCase().includes(search.toLowerCase()))),
    );
  }
}
