import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { CardModule } from 'src/app/shared/UI/card/card.module';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [NewsComponent]
})
export class NewsModule { }
