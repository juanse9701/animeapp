import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TopList, TopItem } from './home.interface';

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
}
