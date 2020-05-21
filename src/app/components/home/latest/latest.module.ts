import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestComponent } from './latest.component';
import { CardModule } from 'src/app/shared/UI/card/card.module';



@NgModule({
  declarations: [LatestComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [LatestComponent]
})
export class LatestModule { }
