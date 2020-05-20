import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { CardModule } from 'src/app/shared/UI/card/card.module';



@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [TopComponent]
})
export class TopModule { }
