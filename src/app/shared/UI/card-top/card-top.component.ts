import { Component, OnInit, Input } from '@angular/core';
import { FavoriteServiceService } from '../../Services/favorite-service.service';

@Component({
  selector: 'app-card-top',
  templateUrl: './card-top.component.html',
  styleUrls: ['./card-top.component.css']
})
export class CardTopComponent implements OnInit {

  @Input() name: string;
  @Input() src: string;
  @Input() alt: string;

  constructor(private favoriteService: FavoriteServiceService) {
    this.name = '';
    this.src = '';
    this.alt = '';
   }

  ngOnInit(): void {
  }

  addFavorite() {
    this.favoriteService.setFavorite({
      name: this.name,
      img: this.src
    });
  }
}
