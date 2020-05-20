import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { TopItem } from '../home.interface';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  topList: TopItem[];
  constructor(private homeService: HomeService) {
   }

  ngOnInit(): void {
    this.getTopAnime();
  }

  getTopAnime() {
    this.homeService.getTop().subscribe( topList => {
     this.topList = topList.filter( (v, i) => i < 5) || [];
    }
    );
  }

}
