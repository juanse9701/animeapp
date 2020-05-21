import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Season } from '../home.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  season: Season[];
  constructor(private homeService: HomeService) {
    this.season = [];
  }

  ngOnInit(): void {
    this.getSeason();
  }

  async getSeason(): Promise<any> {
    this.season = await this.homeService.getSeasonAnimes().toPromise();
  }
}
