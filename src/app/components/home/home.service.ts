import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {  TopItem, Season } from './home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient: HttpClient) {
  }


  getTop(): Observable<TopItem[]> {
    return this.httpclient.get<any>(`${environment.API}top/anime/1/tv`).pipe(
      map( value => value.top)
    );
  }

  getSeasonAnimes(): Observable<Season[]> {
    return this.httpclient.get<any>(`${environment.API}season`).pipe(
      map( result => result.anime.filter(({}, index: number) => index < 20 ))
    );
  }
}
