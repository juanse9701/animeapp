import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestComponent } from './latest.component';



@NgModule({
  declarations: [LatestComponent],
  imports: [
    CommonModule
  ],
  exports: [LatestComponent]
})
export class LatestModule { }
