import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  private favoriteList = [];
  private favorites = new BehaviorSubject<any>([]);
  favorites$ = this.favorites.asObservable();

  constructor() { }

  setFavorite(anime: any = {}) {
    if (this.animeExist(anime?.name)) {
      this.favoriteList = [...this.favoriteList, anime];
      this.favorites.next(this.favoriteList);
    } else {
      Swal.fire({
        html: `<p style="color: black">el anime ${anime.name} ya esta en favoritos</p>`,
        icon: 'error'
      });
    }
  }

  animeExist(anime: string) {
    return !this.favoriteList.find(value => value.name === anime);
  }

}
