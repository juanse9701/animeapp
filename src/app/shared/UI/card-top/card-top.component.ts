import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-top',
  templateUrl: './card-top.component.html',
  styleUrls: ['./card-top.component.css']
})
export class CardTopComponent implements OnInit {

  @Input() name: string;
  @Input() src: string;
  @Input() alt: string;

  constructor() {
    this.name = '';
    this.src = '';
    this.alt = '';
   }

  ngOnInit(): void {
  }

}
