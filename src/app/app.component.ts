import { Component } from '@angular/core';
import { FavoriteServiceService } from './shared/Services/favorite-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anime-list-app';
  favoritesCount$: Observable<any>;

  constructor(private favoriteService: FavoriteServiceService) {
    this.favoritesCount$ = this.favoriteService.favorites$;
  }
}
