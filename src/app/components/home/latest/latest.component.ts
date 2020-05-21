import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { Season } from '../home.interface';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  $animes: Observable<Season[]>;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getUpcomingAnimes();
  }

  getUpcomingAnimes(): void {
    this.$animes = this.homeService.getUpcomingAnime();
  }
}
