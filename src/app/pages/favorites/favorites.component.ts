import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteServiceService } from 'src/app/shared/Services/favorite-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesAnime$: Observable<any>;

  constructor(private favoriteService: FavoriteServiceService) {
    this.favoritesAnime$ = this.favoriteService.favorites$;
  }

  ngOnInit(): void {
  }

}
