import { Component, OnInit, Input } from '@angular/core';
import { Genres } from '@components/home/home.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() src: string;
  @Input() alt: string;
  @Input() genres: Genres[];

  constructor() {
    this.name = '';
    this.src = '';
    this.alt = '';
    this.genres = [];
   }

  ngOnInit(): void {
  }

}
